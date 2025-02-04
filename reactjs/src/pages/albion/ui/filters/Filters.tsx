import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import {
  AlbionItemSlotEnum,
  Enchantment,
  selectFiltersForSlot,
  selectOverallFilters,
  setEnchantmentFilterValue,
  setNameFilterValue,
  setTierFilterValue,
  Tier
} from 'pages/albion/model';
import { getAvailableEnchantmentsForSlot, getAvailableTiersForSlot } from 'pages/albion/utils';

import { RootState } from 'app/model/store';

export const AlbionFilters = ({ slot }: { slot: AlbionItemSlotEnum | null }) => {
  const [ filterInput, setFilterInput ] = useState('');
  const slotFilters = useSelector((state: RootState) => slot === null ? selectOverallFilters(state) : selectFiltersForSlot(state, slot));

  const dispatch = useDispatch();

  if (!slotFilters) { return null; }
  const { tiers, enchantments } = slotFilters;

  const filterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterInput(value);
    dispatch(setNameFilterValue(slot, value));
  };

  const filterTier = (tier: Tier | null) => {
    dispatch(setTierFilterValue(slot, tiers, tier));
  };

  const filterEnchantment = (enchantment: Enchantment | null) => {
    dispatch(setEnchantmentFilterValue(slot, enchantments, enchantment));
  };

  return (
    <div className='w-full rounded-md border-dashed border p-1'>
      { slot !== null && (
        <div className='relative w-full pb-1'>
          <MdSearch className='absolute w-6 h-6 translate-y-0.5' />
          <input
            type='text'
            placeholder='Filter by name'
            className='w-full pl-6'
            value={filterInput}
            onChange={filterText}
          />
        </div>
      )}
      <div className='w-full h-full flex flex-row'>
        <div className='flex-1'>
          <p>
            Tier
            { tiers.length > 0 && (
              <span
                className='ml-1 text-sm text-blue-500 cursor-pointer'
                onClick={() => filterTier(null)}
              >
                (Clear)
              </span>
            )}
          </p>
          { getAvailableTiersForSlot(slot).map(tier => (
            <div key={(slot ?? 'Ov') + tier} className='flex'>
              <input
                type='checkbox'
                id={`Filter${slot ?? 'Ov'}Tier${tier}`}
                checked={tiers.includes(tier)}
                onChange={() => filterTier(tier)}
              />
              <label className='ml-1 flex-1 cursor-pointer' htmlFor={`Filter${slot ?? 'Ov'}Tier${tier}`}>T{tier}</label>
            </div>
          ))}
        </div>
        <div className='flex-1'>
          <p>
            Enchantment
            { enchantments.length > 0 && (
              <span
                className='ml-1 text-sm text-blue-500 cursor-pointer'
                onClick={() => filterEnchantment(null)}
              >
                (Clear)
              </span>
            )}
          </p>
          { getAvailableEnchantmentsForSlot(slot).map(enchantment => (
            <div key={(slot ?? 'Ov') + enchantment} className='flex'>
              <input
                type='checkbox'
                id={`Filter${slot ?? 'Ov'}Enchantment${enchantment}`}
                checked={enchantments.includes(enchantment)}
                onChange={() => filterEnchantment(enchantment)}
              />
              <label className='ml-1 flex-1 cursor-pointer' htmlFor={`Filter${slot ?? 'Ov'}Enchantment${enchantment}`}>.{enchantment}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};