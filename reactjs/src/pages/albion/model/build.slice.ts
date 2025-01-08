import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/model/store';
import { AlbionItem, AlbionItemSlotEnum, Enchantment, Quality, Tier } from './types';

export const NAME = 'albionBuild';

export interface AlbionItemFilterState {
  name?: string;
  tiers?: Tier[];
  enchantments?: Enchantment[];
  qualities?: Quality[];
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
    //#region overallFilters
    clearOverallFilters(state) {
      state.overallFilters = { };
    },
    setOverallFilterValue(state, action: PayloadAction<{ key: keyof AlbionItemFilterState, value: unknown }>) {
      const { key, value } = action.payload;
      // Type check on a per-entry basis. I couldn't find any way to make it generic
      if (key === 'name') {
        state.overallFilters[key] = value as AlbionItemFilterState['name'];
      } else if (key === 'tiers') {
        state.overallFilters[key] = value as AlbionItemFilterState['tiers'];
      } else if (key === 'enchantments') {
        state.overallFilters[key] = value as AlbionItemFilterState['enchantments'];
      } else if (key === 'qualities') {
        state.overallFilters[key] = value as AlbionItemFilterState['qualities'];
      } else {
        throw TypeError('[setFilterStateValue] unrecognized key: ' + key);
      }
    },
    //#endregion

    //#region filtersBySlot
    clearAllSlotFilters(state) {
      state.filtersBySlot = Object.values(AlbionItemSlotEnum).reduce((acc, key) => {
        acc[key] = {};
        return acc
      }, {} as TFiltersBySlot);
    },
    clearSlotFilter(state, action: PayloadAction<AlbionItemSlotEnum>) {
      state.filtersBySlot[action.payload] = {};
    },
    setSlotFilterValue(state, action: PayloadAction<{ slot: AlbionItemSlotEnum, key: keyof AlbionItemFilterState, value: unknown }>) {
      const { slot, key, value } = action.payload;
      // Type check on a per-entry basis. I couldn't find any way to make it generic
      if (key === 'name') {
        state.filtersBySlot[slot][key] = value as AlbionItemFilterState['name'];
      } else if (key === 'tiers') {
        state.filtersBySlot[slot][key] = value as AlbionItemFilterState['tiers'];
      } else if (key === 'enchantments') {
        state.filtersBySlot[slot][key] = value as AlbionItemFilterState['enchantments'];
      } else if (key === 'qualities') {
        state.filtersBySlot[slot][key] = value as AlbionItemFilterState['qualities'];
      } else {
        throw TypeError('[setFilterStateValue] unrecognized key: ' + key);
      }
    },
    //#endregion

    //#region itemsBySlot
    clearAllItems(state) {
      for (const itemSlot of Object.values(AlbionItemSlotEnum)) {
        state.itemsBySlot[itemSlot] = undefined;
      }
    },
    setItem(state, action: PayloadAction<{ slot: AlbionItemSlotEnum, item: AlbionItem }>) {
      const { slot, item } = action.payload;
      state.itemsBySlot[slot] = item;
    },
  }
});

export const {
  clearOverallFilters,
  setOverallFilterValue,
  clearAllSlotFilters,
  clearSlotFilter,
  setSlotFilterValue,
  clearAllItems,
  setItem,
} = buildSlice.actions;

export const selectOverallFilters = (state: RootState) => state[NAME].overallFilters;
export const selectFilterForSlot = (state: RootState, slot: AlbionItemSlotEnum) => state[NAME].filtersBySlot[slot];
export const selectItemForSlot = (state: RootState, slot: AlbionItemSlotEnum) => state[NAME].itemsBySlot[slot];

export default buildSlice.reducer;
