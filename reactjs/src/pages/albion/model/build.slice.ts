import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/model/store';
import { AlbionItemData, AlbionItemSlotEnum, Enchantment, Quality, Tier } from './types';

export const NAME = 'albionBuild';

export interface AlbionItemFilterState {
  name: string;
  tiers: Tier[];
  enchantments: Enchantment[];
  qualities: Quality[];
}

type TFiltersBySlot = { [T in AlbionItemSlotEnum]: AlbionItemFilterState };
// Must use AlbionItemData (backing object) since AlbionItem is a class and thus not serializable
// Alternatively, could implement a serializer
type TItemsBySlot = { [T in AlbionItemSlotEnum]: AlbionItemData | undefined };

export interface AlbionBuildState {
  overallFilters: AlbionItemFilterState;
  filtersBySlot: TFiltersBySlot;
  itemsBySlot: TItemsBySlot;
}

const _blankFilterState: AlbionItemFilterState = {
  name: '',
  tiers: [],
  enchantments: [],
  qualities: [],
};

const initialState: AlbionBuildState = {
  overallFilters: { ..._blankFilterState },
  filtersBySlot: Object.values(AlbionItemSlotEnum).reduce((acc, key) => {
    acc[key] = { ..._blankFilterState };
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
      state.overallFilters = { ..._blankFilterState };
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
        acc[key] = { ..._blankFilterState };
        return acc
      }, {} as TFiltersBySlot);
    },
    clearSlotFilter(state, action: PayloadAction<AlbionItemSlotEnum>) {
      state.filtersBySlot[action.payload] = { ..._blankFilterState };
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
    setItem(state, action: PayloadAction<{ slot: AlbionItemSlotEnum, itemData: AlbionItemData }>) {
      const { slot, itemData } = action.payload;
      state.itemsBySlot[slot] = itemData;
    },
  }
});

// #region Filter setting convenience functions

export const setNameFilterValue = (slot: AlbionItemSlotEnum | null, value: string) => {
  if (slot === null) {
    return buildSlice.actions.setOverallFilterValue({ key: 'name', value });
  } else {
    return buildSlice.actions.setSlotFilterValue({ slot, key: 'name', value });
  }
};

export const setTierFilterValue = (slot: AlbionItemSlotEnum | null, currentTiers: Tier[], tier: Tier | null) => {
  let newTiers: Tier[];
  if (tier === null) {
    newTiers = [];
  } else if (currentTiers.includes(tier)) {
    newTiers = currentTiers.filter(t => t !== tier);
  } else {
    newTiers = [ ...currentTiers, tier ];
  }

  if (slot === null) {
    return buildSlice.actions.setOverallFilterValue({ key: 'tiers', value: newTiers });
  } else {
    return buildSlice.actions.setSlotFilterValue({ slot, key: 'tiers', value: newTiers });
  }
};

export const setEnchantmentFilterValue = (slot: AlbionItemSlotEnum | null, currentEnchantments: Enchantment[], enchantment: Enchantment | null) => {
  let newEnchantments: Enchantment[];
    if (enchantment === null) {
      newEnchantments = [];
    } else if (currentEnchantments.includes(enchantment)) {
      newEnchantments = currentEnchantments.filter(e => e !== enchantment);
    } else {
      newEnchantments = [ ...currentEnchantments, enchantment ];
    }

    if (slot === null) {
      return buildSlice.actions.setOverallFilterValue({ key: 'enchantments', value: newEnchantments });
    } else {
      return buildSlice.actions.setSlotFilterValue({ slot, key: 'enchantments', value: newEnchantments });
    }
};
// #endregion

export const {
  clearOverallFilters,
  // setOverallFilterValue, <-- remove in favor of convenience function
  clearAllSlotFilters,
  clearSlotFilter,
  // setSlotFilterValue, <-- remove in favor of convenience function
  clearAllItems,
  setItem,
} = buildSlice.actions;

export const selectOverallFilters = (state: RootState) => state[NAME].overallFilters;
export const selectFiltersForSlot = (state: RootState, slot: AlbionItemSlotEnum) => state[NAME].filtersBySlot[slot];
export const selectItemForSlot = (state: RootState, slot: AlbionItemSlotEnum) => state[NAME].itemsBySlot[slot];

export default buildSlice.reducer;
