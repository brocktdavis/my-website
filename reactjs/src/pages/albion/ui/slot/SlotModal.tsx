import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/model/store';
import { AlbionItem, AlbionItemDef, AlbionItemSlotEnum, selectFilterForSlot, setItem } from 'pages/albion/model';
import { getItemDefsForSlot } from 'pages/albion/utils';
import { hideModal } from 'shared/model';

const ItemPreview = ({ itemDef, onClick }: { itemDef: AlbionItemDef, onClick: () => void }) => (
  <div className='h-20 mt-2 rounded-md bg-slate-200 dark:bg-gray-800/60'>
    <div className='flex h-full items-center cursor-pointer' onClick={onClick}>
      <img className='max-h-full w-auto' src={`https://render.albiononline.com/v1/item/T8_${itemDef.id}.png?quality=1`} />
      <p>{itemDef.name}</p>
    </div>
  </div>
);

export const AlbionItemSlotModal = ({ slot }: { slot: AlbionItemSlotEnum }) => {

  const filters = useSelector((state: RootState) => selectFilterForSlot(state, slot));
  console.log('[AlbionItemSlotModal] filters: ', filters);

  const itemDefs = getItemDefsForSlot(slot);

  const dispatch = useDispatch();

  const handleSelectItemDef = (itemDef: AlbionItemDef) => {
    const item: AlbionItem = {
      def: itemDef,
      tier: 8,
      enchantment: 0,
      quality: 1,
    };
    dispatch(setItem({ slot, item }));
    dispatch(hideModal());
  };

  return (
    <div>
      <div className='w-full h-32 rounded-md border-dashed border flex justify-center items-center'>
        <p>Future: Filters & Search</p>
      </div>
      { itemDefs.map((itemDef) => (
        <ItemPreview key={itemDef.name} itemDef={itemDef} onClick={() => handleSelectItemDef(itemDef)} />
      ))}
      { itemDefs.length === 0 && (
        <p className='text-lg text-center mt-4'>No results.</p>
      )}
    </div>
  )
};