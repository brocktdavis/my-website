import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/model/store';
import { AlbionItem, AlbionItemSlotEnum, selectFiltersForSlot, selectOverallFilters, setItem } from 'pages/albion/model';
import { combineFilters, getFilteredItemsForSlot } from 'pages/albion/utils';
import { hideModal } from 'shared/model';
import { AlbionFilters } from '../filters';

const ItemPreview = ({ item, onClick }: { item: AlbionItem, onClick: () => void }) => (
  <div className='h-20 mt-2 rounded-md bg-slate-200 dark:bg-gray-800/60'>
    <div className='flex h-full items-center cursor-pointer' onClick={onClick}>
      <img className='max-h-full w-auto' src={item.imageSrc} />
      <p>{item.displayName}</p>
    </div>
  </div>
);

export const AlbionItemSlotModal = ({ slot }: { slot: AlbionItemSlotEnum }) => {

  const overallFilters = useSelector(selectOverallFilters);
  const slotFilters = useSelector((state: RootState) => selectFiltersForSlot(state, slot));
  const combinedFilters = combineFilters(overallFilters, slotFilters)
  const filteredItems = getFilteredItemsForSlot(slot, combinedFilters);

  const dispatch = useDispatch();

  const handleSelectItemDef = (item: AlbionItem) => {
    dispatch(setItem({ slot, itemData: item.data }));
    dispatch(hideModal());
  };

  return (
    <div>
      <AlbionFilters slot={slot} />
      { filteredItems.map((item) => (
        <ItemPreview key={item.key} item={item} onClick={() => handleSelectItemDef(item)} />
      ))}
      { filteredItems.length === 0 && (
        <p className='text-lg text-center mt-4'>No results.</p>
      )}
    </div>
  )
};
