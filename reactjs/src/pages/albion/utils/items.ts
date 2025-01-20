/* eslint-disable @typescript-eslint/no-explicit-any */
import YAML from 'yaml';
import { AlbionItemDef } from '../model';

// TODO: don't host at /public, instead load it with vite-plugin-yaml or similar
const yamlResponse = await fetch('/items.yaml');
const yamlText = await yamlResponse.text();
export const itemsData: AlbionItemDef[] = YAML.parse(yamlText).items;

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
  const byClass = groupBy(slotItems as any[], 'class');
  if (slotName === 'MainHand') {
    structuredItemData[slotName] = {};
    for (const [className, classMainHands] of Object.entries(byClass)) {
      const bySubType = groupBy(classMainHands as any[], 'subtype');
      structuredItemData[slotName][className] = bySubType;
    }
  } else {
    structuredItemData[slotName] = byClass;
  }
}

export { structuredItemData };
