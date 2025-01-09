import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/model/store';
import { showModal } from 'shared/model';
import { AlbionItemSlotEnum, selectItemForSlot } from 'pages/albion/model';
import { AlbionItemSlotModal } from '.';

const USE_STUB = true;

interface ItemSlotProps {
  slot: AlbionItemSlotEnum;
  style?: React.CSSProperties;
}

export const AlbionItemSlot = ({ slot, style }: ItemSlotProps) => {
  const currentItem = useSelector((state: RootState) => selectItemForSlot(state, slot));

  const dispatch = useDispatch();

  const handleToggleModal = () => {
    dispatch(showModal({ Component: AlbionItemSlotModal, props: { slot } }));
  }

  return (
    <>
    { USE_STUB ? (
      <div onClick={handleToggleModal} style={style} className='bg-amber-600 w-24 h-24 m-1 border border-black flex justify-center items-center'>
        <p className='text-white'>{ currentItem?.def.name ?? slot }</p>
      </div>
    ) : (
      <p>TODO</p>
    )}
    </>
  );
};
