import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/model/store';
import { Modal } from 'shared/modal';
import { AlbionItemSlotEnum, selectItemForSlot } from 'pages/albion/model';
import { AlbionItemSlotModal } from '.';

const USE_STUB = true;

interface ItemSlotProps {
  slot: AlbionItemSlotEnum;
  style?: React.CSSProperties;
}

export const AlbionItemSlot = ({ slot, style }: ItemSlotProps) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const currentItem = useSelector((state: RootState) => selectItemForSlot(state, slot));

  return (
    <>
    <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(!modalIsOpen)}>
      <AlbionItemSlotModal slot={slot} />
    </Modal>
    { USE_STUB ? (
      <div onClick={() => setModalIsOpen(!modalIsOpen)} style={style} className='bg-amber-600 w-24 h-24 m-1 border border-black flex justify-center items-center'>
        <p className='text-white'>{ currentItem?.def.name ?? slot }</p>
      </div>
    ) : (
      <p>TODO</p>
    )}
    </>
  );
};
