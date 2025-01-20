import { AlbionItem, AlbionItemDef, AlbionItemSlotEnum, Enchantment, ENCHANTMENTS, QUALITIES, Quality, Tier, TIERS } from 'pages/albion/model';
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

export const getItemsForDef = (def: AlbionItemDef, tiers?: Tier[], enchantments?: Enchantment[], qualities?: Quality[]) => {
  const tiersToUse = tiers ? tiers : TIERS;
  const enchantmentsToUse = enchantments ? enchantments : ENCHANTMENTS;
  const qualitiesToUse = qualities ? qualities : QUALITIES;

  const result: AlbionItem[] = [];
  for (const tier of tiersToUse) {
    for (const enchantment of enchantmentsToUse) {
      for (const quality of qualitiesToUse) {
        result.push({ def, tier, enchantment, quality });
      }
    }
  }
  return result;
};
