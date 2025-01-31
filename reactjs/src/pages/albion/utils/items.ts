/* eslint-disable @typescript-eslint/no-explicit-any */
import YAML from 'yaml';
import { AlbionItem, AlbionItemDef, AlbionItemFilterState, AlbionItemSlotEnum, Enchantment, Quality, Tier } from '../model';

// Slots that should be sorted by class (Warrior/Hunter/Mage) in structured item data
const BY_CLASS_SLOTS = new Set([ AlbionItemSlotEnum.Armor, AlbionItemSlotEnum.Helmet, AlbionItemSlotEnum.MainHand, AlbionItemSlotEnum.OffHand, AlbionItemSlotEnum.Shoes ]);

// Slots that should by sorted by subtype (E.g. Axe, Nature Staff, Priest, etc.) in structured item data
const BY_SUBTYPE_SLOTS = new Set([ AlbionItemSlotEnum.MainHand ]);

// #region Extract/Transform YAML data to JS object

// TODO: don't host at /public, instead load it with vite-plugin-yaml or similar
const yamlResponse = await fetch('/items.yaml');
const yamlText = await yamlResponse.text();
const itemsData: AlbionItemDef[] = YAML.parse(yamlText).items;

// TODO: add typing to functions

const groupBy = (array: any[], key: string) => {
  return array.reduce((acc, item) => {
    const value = item[key];
    if (!acc[value]) {
      acc[value] = [];
    }
    acc[value].push(item);
    return acc;
  }, {});
};

const structuredItemData: any = {};

const bySlot = groupBy(itemsData, 'slot');
for (const [slotName, slotItems] of Object.entries(bySlot)) {

  // If not sorted by class, return all items as flat list
  if (!BY_CLASS_SLOTS.has(slotName as AlbionItemSlotEnum)) {
    structuredItemData[slotName] = slotItems;
    continue;
  }

  // If not sorted by subtype, return grouped by class
  const byClass = groupBy(slotItems as any[], 'class');
  if (!BY_SUBTYPE_SLOTS.has(slotName as AlbionItemSlotEnum)) {
    structuredItemData[slotName] = byClass;
    continue;
  }

  // Finally, group by class then subtype
  structuredItemData[slotName] = {};
  for (const [className, classMainHands] of Object.entries(byClass)) {
    const bySubType = groupBy(classMainHands as any[], 'subtype');
    structuredItemData[slotName][className] = bySubType;
  }
}

// #endregion (Extract/Transform)

const getItemDefsForSlot = (slot: AlbionItemSlotEnum) => {
  const defs = structuredItemData;

  let result: AlbionItemDef[] = defs[slot];

  if (BY_SUBTYPE_SLOTS.has(slot)) {
    result = Object.values(result).flatMap(classItemSet => Object.values(classItemSet));
  }

  if (BY_CLASS_SLOTS.has(slot)) {
    result = Object.values(result).flat();
  }

  return result;
};

export const getFilteredItemsForSlot = (slot: AlbionItemSlotEnum, filters: AlbionItemFilterState) => {
  const itemDefs = getItemDefsForSlot(slot) ?? [];

  const enchantments = filters.enchantments.length ? filters.enchantments : getAvailableEnchantmentsForSlot(slot);
  const qualities: Quality[] = [ 1 ];

  let result = [];
  for (const itemDef of itemDefs) {
    // tiers to use depends on item def, so calculate separately for each item
    const possibleTiers = itemDef.prefixesByTier ? Object.keys(itemDef.prefixesByTier).map(t => +t as Tier) : getAvailableTiersForSlot(slot);
    let tiersToUse = [...possibleTiers];
    if (filters.tiers.length) {
      tiersToUse = tiersToUse.filter(t => filters.tiers.includes(t));
    }
  
    for (const tier of tiersToUse) {
      result.push(
        ...enchantments.flatMap(enchantment => (
          qualities.map(quality => (new AlbionItem(itemDef, tier, enchantment, quality)))
        ))
      );
    }
  }

  return result;
};

export const getAvailableTiersForSlot: (slot: AlbionItemSlotEnum) => Tier[] = (slot: AlbionItemSlotEnum) => {
  if (slot === AlbionItemSlotEnum.Potion) {
    return [ 2, 3, 4, 5, 6, 7, 8 ];
  } else {
    return [ 4, 5, 6, 7, 8 ];
  }
};

export const getAvailableEnchantmentsForSlot: (slot: AlbionItemSlotEnum) => Enchantment[] = (slot: AlbionItemSlotEnum) => {
  if (slot === AlbionItemSlotEnum.Potion) {
    return [ 0, 1, 2, 3 ];
  } else { 
    return [ 0, 1, 2, 3, 4 ];
  }
};
