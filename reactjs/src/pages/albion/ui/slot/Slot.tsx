import { Modal } from 'shared/modal';
import { AlbionItemSlotEnum } from 'pages/albion/model';
import { useState } from 'react';
import { AlbionItemSlotModal } from '.';

const USE_STUB = true;

interface ItemSlotProps {
  type: AlbionItemSlotEnum;
  style?: React.CSSProperties;
}

export const AlbionItemSlot = ({ type, style }: ItemSlotProps) => {

  const [ name, setName ] = useState(type);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  return (
    <>
    <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(!modalIsOpen)}>
      <AlbionItemSlotModal type={type} onItemSelected={(newName) => { setName(newName as AlbionItemSlotEnum); setModalIsOpen(!modalIsOpen) }} />
    </Modal>
    { USE_STUB ? (
      <div onClick={() => setModalIsOpen(!modalIsOpen)} style={style} className='bg-amber-600 w-24 h-24 m-1 border border-black flex justify-center items-center'>
        <p className='text-white'>{ name }{ }</p>
      </div>
    ) : (
      <p>TODO</p>
    )}
    </>
  );
};
