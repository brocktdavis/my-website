import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/model/store';
import { AlbionItem, AlbionItemSlotEnum, Enchantment, Quality, Tier } from './types';

export const NAME = 'albionBuild';

export interface AlbionItemFilterState {
  name?: string;
  tier?: Tier[];
  enchantment?: Enchantment[];
  quality?: Quality[];
}

type TFiltersBySlot = { [T in AlbionItemSlotEnum]: AlbionItemFilterState };
type TItemsBySlot = { [T in AlbionItemSlotEnum]: AlbionItem | undefined };

export interface AlbionBuildState {
  overallFilters: AlbionItemFilterState;
  filtersBySlot: TFiltersBySlot;
  itemsBySlot: TItemsBySlot;
}

const initialState: AlbionBuildState = {
  overallFilters: { },
  filtersBySlot: Object.values(AlbionItemSlotEnum).reduce((acc, key) => {
    acc[key] = {};
    return acc
  }, {} as TFiltersBySlot),
  itemsBySlot: Object.values(AlbionItemSlotEnum).reduce((acc, key) => {
    acc[key] = undefined;
    return acc;
  }, {} as TItemsBySlot),
};

const buildSlice = createSlice({
  name: 'albionBuildSlice',
  initialState,
  reducers: {
    clearItems(state) {
      for (const itemSlot of Object.values(AlbionItemSlotEnum)) {
        state.itemsBySlot[itemSlot] = undefined;
      }
    },
    // TODO: figure out how to pass params
    // setItem(state, slot: AlbionItemSlotEnum, item: AlbionItem) {
    //   state.itemsBySlot[slot] = item;
    // }
  }
});

export const { clearItems } = buildSlice.actions;

export const selectOverallFilters = (state: RootState) => state[NAME].overallFilters;
export const selectFilterForSlot = (state: RootState, slot: AlbionItemSlotEnum) => state[NAME].filtersBySlot[slot];
export const selectItemForSlot = (state: RootState, slot: AlbionItemSlotEnum) => state[NAME].itemsBySlot[slot];

export default buildSlice.reducer;
