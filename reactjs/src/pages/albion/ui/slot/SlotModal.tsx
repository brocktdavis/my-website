import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/model/store';
import { AlbionItem, AlbionItemDef, AlbionItemSlotEnum, selectFilterForSlot, setItem } from 'pages/albion/model';
import { getItemDefsForSlot } from 'pages/albion/utils';

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
  };

  return (
    <div>
      { itemDefs.map((itemDef) => (
        <div key={itemDef.name}>
          <button onClick={() => handleSelectItemDef(itemDef)}>
            {itemDef.name}
          </button>
        </div>
      ))}
    </div>
  )
};