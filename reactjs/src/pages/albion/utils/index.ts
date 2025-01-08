import { AlbionItem, AlbionItemDef, AlbionItemSlotEnum, Enchantment, ENCHANTMENTS, QUALITIES, Quality, Tier, TIERS } from 'pages/albion/model';
import ItemDefs from '../assets/item-defs.json';

const getAllItemDefs: () => AlbionItemDef[] = () => (
  ItemDefs.map(sourceDef => ({
    ...sourceDef,
    slot: AlbionItemSlotEnum[
      sourceDef.slot as keyof typeof AlbionItemSlotEnum
    ],
  } as AlbionItemDef))
);

export const getItemDefsForSlot = (slot: AlbionItemSlotEnum) => {
  const defs = getAllItemDefs();
  return defs.filter(def => def.slot === slot);
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
