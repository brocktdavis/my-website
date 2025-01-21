import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/model/store';
import { showModal } from 'shared/model';
import { AlbionItem, AlbionItemSlotEnum, selectItemForSlot } from 'pages/albion/model';
import { AlbionItemSlotModal } from '.';

interface ItemSlotProps {
  slot: AlbionItemSlotEnum;
  style?: React.CSSProperties;
}

export const AlbionItemSlot = ({ slot, style }: ItemSlotProps) => {
  const currentItemData = useSelector((state: RootState) => selectItemForSlot(state, slot));
  const mainHandItemData = useSelector((state: RootState) => selectItemForSlot(state, AlbionItemSlotEnum.MainHand));

  const currentItem = AlbionItem.fromData(currentItemData);
  const mainHandItem = AlbionItem.fromData(mainHandItemData);

  const dispatch = useDispatch();

  const handleToggleModal = () => {
    dispatch(showModal({ Component: AlbionItemSlotModal, props: { slot } }));
  };

  let imgClass = '';
  let imgSrc = '';
  if (slot === AlbionItemSlotEnum.OffHand && mainHandItem?.def.is2H) {
    imgClass = 'opacity-20';
    imgSrc = mainHandItem.imageSrc;
  } else if (currentItem) {
    imgSrc = currentItem.imageSrc;
  }

  return (
    <div className='w-24 h-24 rounded-md m-1 bg-slate-200 dark:bg-gray-800/60' style={style}>
      <div className='w-full h-full flex justify-center items-center cursor-pointer' onClick={handleToggleModal}>
        {( imgSrc ? (
          <img className={imgClass} src={imgSrc} />
        ) : (
          <p>{ slot }</p>
        ))}
      </div>
    </div>
  );
};
