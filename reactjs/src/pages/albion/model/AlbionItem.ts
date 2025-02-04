import { AlbionItemData, AlbionItemDef, Enchantment, Quality, Tier } from './types';

export class AlbionItem implements AlbionItemData {
  constructor (
    public def: AlbionItemDef,
    public tier: Tier,
    public enchantment: Enchantment,
    public quality: Quality,
  ) {}

  static fromData = (data?: AlbionItemData) => {
    if (!data) {
      return undefined;
    }
    const { def, tier, enchantment, quality } = data;
    return new AlbionItem(def, tier, enchantment, quality);
  };

  get data(): AlbionItemData {
    const { def, tier, enchantment, quality } = this;
    return { def, tier, enchantment, quality };
  }

  get imageSrc(): string {
    return `https://render.albiononline.com/v1/item/T${this.tier}_${this.def.id}@${this.enchantment}.png?quality=${this.quality}`;
  }

  get key(): string {
    return `Item_${this.def.id}-${this.tier}.${this.enchantment}-${this.quality}`;
  }

  get displayName(): string {
    return `${this.prefix} ${this.def.name}`;
  }

  private get prefix(): string {
    if (this.def.prefixesByTier) {
      return this.def.prefixesByTier[this.tier];
    }

    switch (this.tier) {
      case 1: return "";
      case 2: return "Novice's";
      case 3: return "Journeyman's";
      case 4: return "Adept's";
      case 5: return "Expert's";
      case 6: return "Master's";
      case 7: return "Grandmaster's";
      case 8: return "Elder's";
    }
  }
}
