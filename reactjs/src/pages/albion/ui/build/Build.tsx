import { useSelector } from 'react-redux';
import { AlbionItemSlotEnum, selectOverallFilters } from 'pages/albion/model';
import { AlbionItemSlot } from '../slot';

export const AlbionBuild = () => {
  const { name, tiers, enchantments } = useSelector(selectOverallFilters);
  console.log('BTD [AlbionBuild] filters: ', name, tiers, enchantments);


  return (
    <>
    <div className='w-full h-32 rounded-md border-dashed border flex justify-center items-center'>
      <p>Future: Filters & Search</p>
    </div>
    <div className='flex flex-row flex-nowrap justify-center'>
      <div className='flex flex-col'>
        <AlbionItemSlot slot={AlbionItemSlotEnum.Bag} style={{ marginTop: '10px' }} />
        <AlbionItemSlot slot={AlbionItemSlotEnum.MainHand} />
        <AlbionItemSlot slot={AlbionItemSlotEnum.Potion} />
      </div>
      <div className='flex flex-col'>
        <AlbionItemSlot slot={AlbionItemSlotEnum.Helmet} />
        <AlbionItemSlot slot={AlbionItemSlotEnum.Armor} />
        <AlbionItemSlot slot={AlbionItemSlotEnum.Shoes} />
        <AlbionItemSlot slot={AlbionItemSlotEnum.Mount} />
      </div>
      <div className='flex flex-col'>
        <AlbionItemSlot slot={AlbionItemSlotEnum.Cape} style={{ marginTop: '10px' }} />
        <AlbionItemSlot slot={AlbionItemSlotEnum.OffHand} />
        <AlbionItemSlot slot={AlbionItemSlotEnum.Food} />
      </div>
    </div>
  </>
  );
};
