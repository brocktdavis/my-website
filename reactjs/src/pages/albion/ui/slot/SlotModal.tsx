import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/model/store';
import { AlbionItem, AlbionItemSlotEnum, Enchantment, ENCHANTMENTS, selectFiltersForSlot, setItem, setSlotFilterValue, Tier, TIERS } from 'pages/albion/model';
import { getFilteredItemsForSlot } from 'pages/albion/utils';
import { hideModal } from 'shared/model';

const ItemPreview = ({ item, onClick }: { item: AlbionItem, onClick: () => void }) => (
  <div className='h-20 mt-2 rounded-md bg-slate-200 dark:bg-gray-800/60'>
    <div className='flex h-full items-center cursor-pointer' onClick={onClick}>
      <img className='max-h-full w-auto' src={item.imageSrc} />
      <p>{item.displayName}</p>
    </div>
  </div>
);

const ModalFilters = ({ slot }: { slot: AlbionItemSlotEnum }) => {
  const slotFilters = useSelector((state: RootState) => selectFiltersForSlot(state, slot));

  const dispatch = useDispatch();

  if (!slotFilters) { return null; }
  const { tiers, enchantments } = slotFilters;

  const filterTier = (tier: Tier | null) => {
    let newTiers: Tier[];
    if (tier === null) {
      newTiers = [];
    } else if (tiers.includes(tier)) {
      newTiers = tiers.filter(t => t !== tier);
    } else {
      newTiers = [ ...tiers, tier ];
    }
    dispatch(setSlotFilterValue({ slot, key: 'tiers', value: newTiers }));
  };

  const filterEnchantment = (enchantment: Enchantment | null) => {
    let newEnchantments: Enchantment[];
    if (enchantment === null) {
      newEnchantments = [];
    } else if (enchantments.includes(enchantment)) {
      newEnchantments = enchantments.filter(e => e !== enchantment);
    } else {
      newEnchantments = [ ...enchantments, enchantment ];
    }
    dispatch(setSlotFilterValue({ slot, key: 'enchantments', value: newEnchantments }));
  };


  return (
    <div className='w-full rounded-md border-dashed border p-1'>
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
          { TIERS.map(tier => (
            <div key={tier} className='flex'>
              <input
                type='checkbox'
                id={`FilterTier${tier}`}
                checked={tiers.includes(tier)}
                onChange={() => filterTier(tier)}
              />
              <label className='ml-1 flex-1' htmlFor={`FilterTier${tier}`}>T{tier}</label>
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
          { ENCHANTMENTS.map(enchantment => (
            <div key={enchantment} className='flex'>
              <input
                type='checkbox'
                id={`FilterEnchantment${enchantment}`}
                checked={enchantments.includes(enchantment)}
                onChange={() => filterEnchantment(enchantment)}
              />
              <label className='ml-1 flex-1' htmlFor={`FilterEnchantment${enchantment}`}>.{enchantment}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AlbionItemSlotModal = ({ slot }: { slot: AlbionItemSlotEnum }) => {

  const slotFilters = useSelector((state: RootState) => selectFiltersForSlot(state, slot));
  const filteredItems = getFilteredItemsForSlot(slot, slotFilters);

  const dispatch = useDispatch();

  const handleSelectItemDef = (item: AlbionItem) => {
    dispatch(setItem({ slot, itemData: item.data }));
    dispatch(hideModal());
  };

  return (
    <div>
      <ModalFilters slot={slot} />
      { filteredItems.map((item) => (
        <ItemPreview key={item.key} item={item} onClick={() => handleSelectItemDef(item)} />
      ))}
      { filteredItems.length === 0 && (
        <p className='text-lg text-center mt-4'>No results.</p>
      )}
    </div>
  )
};
