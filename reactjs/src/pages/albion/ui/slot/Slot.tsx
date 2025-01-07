import { Modal } from 'shared/modal';
import { ItemSlotType } from 'pages/albion/types';
import { useState } from 'react';
import { AlbionItemSlotModal } from '.';

const USE_STUB = true;

interface ItemSlotProps {
  type: ItemSlotType;
  style?: React.CSSProperties;
}

export const AlbionItemSlot = ({ type, style }: ItemSlotProps) => {

  const [ name, setName ] = useState(ItemSlotType[type]);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  return (
    <>
    <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(!modalIsOpen)}>
      <AlbionItemSlotModal type={type} onItemSelected={(newName) => { setName(newName); setModalIsOpen(!modalIsOpen) }} />
    </Modal>
    { USE_STUB ? (
      <div onClick={() => setModalIsOpen(!modalIsOpen)} style={style} className='bg-amber-600 w-24 h-24 m-1 border border-black flex justify-center items-center'>
        <p className='text-white'>{ name }</p>
      </div>
    ) : (
      <p>TODO</p>
    )}
    </>
  );
};
