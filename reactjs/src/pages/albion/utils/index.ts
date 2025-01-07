import { ItemSlotType } from 'pages/albion/types';
import Bags from 'shared/assets/itemDefs/bag.json';

export const getItemDefsForSlot = (slot: ItemSlotType) => {
  switch(slot) {
    case ItemSlotType.Bag:
      return Bags;
    default:
      return [];
  }
};
