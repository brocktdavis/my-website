export enum AlbionItemSlotEnum {
  Bag = 'Bag', // TODO: import bags
  MainHand = 'MainHand',
  Potion = 'Potion',
  Helmet = 'Helmet',
  Armor = 'Armor',
  Shoes = 'Shoes',
  Mount = 'Mount', // TODO: Import mounts
  Cape = 'Cape',
  OffHand = 'OffHand',
  Food = 'Food', // TODO: Import food
}

export interface AlbionItemDef {
  id: string;
  name: string;
  slot: AlbionItemSlotEnum,
  is2H?: boolean;
  class?: 'Warrior' | 'Hunter' | 'Mage';
  subType?: string;
  prefixesByTier?: { [T in Tier]: string };
}

export type Tier = 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Enchantment = 0 | 1 | 2 | 3 | 4;

export type Quality = 1 | 2 | 3 | 4 | 5;

export interface AlbionItemData {
  def: AlbionItemDef;
  tier: Tier;
  enchantment: Enchantment;
  quality: Quality;
}
