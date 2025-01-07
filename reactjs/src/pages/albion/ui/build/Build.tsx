import { ItemSlotType } from 'pages/albion/types';
import { AlbionItemSlot } from '../slot';

export const AlbionBuild = () => {

  return (
    <div className='flex flex-row flex-nowrap'>
      <div className='flex flex-col'>
        <AlbionItemSlot type={ItemSlotType.Bag} style={{ marginTop: '10px' }} />
        <AlbionItemSlot type={ItemSlotType.MainHand} />
        <AlbionItemSlot type={ItemSlotType.Potion} />
      </div>
      <div className='flex flex-col'>
        <AlbionItemSlot type={ItemSlotType.Helm} />
        <AlbionItemSlot type={ItemSlotType.Jacket} />
        <AlbionItemSlot type={ItemSlotType.Boots} />
        <AlbionItemSlot type={ItemSlotType.Mount} />
      </div>
      <div className='flex flex-col'>
        <AlbionItemSlot type={ItemSlotType.Cape} style={{ marginTop: '10px' }} />
        <AlbionItemSlot type={ItemSlotType.OffHand} />
        <AlbionItemSlot type={ItemSlotType.Food} />
      </div>
    </div>
  );
};
