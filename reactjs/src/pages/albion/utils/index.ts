import { AlbionItem, AlbionItemDef, AlbionItemFilterState, AlbionItemSlotEnum, ENCHANTMENTS, QUALITIES, TIERS } from 'pages/albion/model';
import { structuredItemData } from './items';

export const getItemDefsForSlot = (slot: AlbionItemSlotEnum) => {
  const defs = structuredItemData;
  if (slot === AlbionItemSlotEnum.MainHand) {
    const classItems = Object.values(defs[slot]);
    return classItems
      .flatMap(classItemSet => Object.values(classItemSet as ArrayLike<AlbionItemDef>))
      .flat();
  } else {
    return Object.values(defs[slot])
      .filter(value => Array.isArray(value))
      .flat();
  }
};

export const getFilteredItemsForSlot = (slot: AlbionItemSlotEnum, filters: AlbionItemFilterState) => {
  const itemDefs = getItemDefsForSlot(slot);

  const tiers = filters.tiers.length ? filters.tiers : TIERS;
  const enchantments = filters.enchantments.length ? filters.enchantments : ENCHANTMENTS;
  const qualities = [ QUALITIES[0] ];

  return itemDefs.flatMap(itemDef => (
    tiers.flatMap(tier => (
      enchantments.flatMap(enchantment => (
        qualities.map(quality => (new AlbionItem(itemDef, tier, enchantment, quality)))
      ))
    ))
  ));
};
