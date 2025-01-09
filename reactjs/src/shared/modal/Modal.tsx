import { useDispatch, useSelector } from 'react-redux';
import { hideModal, selectModalComponent, selectModalIsOpen, selectModalProps } from 'shared/model';

export interface ModalProps {
  onClose?: () => void;
}

export const Modal = ({  onClose }: ModalProps) => {

  const isOpen = useSelector(selectModalIsOpen);
  const ModalComponent = useSelector(selectModalComponent);
  const modalProps = useSelector(selectModalProps);

  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch(hideModal());
    onClose?.();
  }

  if (!isOpen || !ModalComponent) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
      onClick={handleHideModal}
    >
      <div
        id='modal-panel'
        className='
          max-h-[calc(100vh-2rem)]
          rounded-lg
          shadow-lg
          w-96
          overflow-y-scroll
          overscroll-y-contain
        '
      >
        <div
          id='modal-container'
          className='h-full w-full p-6 '
          onClick={e => e?.stopPropagation()}
        >
          <ModalComponent {...modalProps} />
        </div>
      </div>
    </div>
  );
};
