import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
      onClick={onClose}
    >
      <div
        id='modal-container'
        className='p-6 rounded-lg shadow-lg w-96 text-center'
        onClick={e => e?.stopPropagation()}
      >
        { children }
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};
