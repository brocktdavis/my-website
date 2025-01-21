export enum AlbionItemSlotEnum {
  Bag = 'Bag', // TODO: import bags
  MainHand = 'MainHand',
  Potion = 'Potion', // TODO: Import potions
  Helmet = 'Helmet',
  Armor = 'Armor',
  Shoes = 'Shoes',
  Mount = 'Mount', // TODO: Import mounts
  Cape = 'Cape', // TODO: Import capes
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
}

export const TIERS = [ 4, 5, 6, 7, 8 ] as const;
export type Tier = typeof TIERS[number];

export const ENCHANTMENTS = [ 0, 1, 2, 3, 4 ] as const;
export type Enchantment = typeof ENCHANTMENTS[number];

export const QUALITIES = [ 1, 2, 3, 4, 5 ] as const;
export type Quality = typeof QUALITIES[number];

export interface AlbionItemData {
  def: AlbionItemDef;
  tier: Tier;
  enchantment: Enchantment;
  quality: Quality;
}
