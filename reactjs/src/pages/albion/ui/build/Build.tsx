import { useSelector } from 'react-redux';
import { AlbionItemSlotEnum } from 'pages/albion/model';
import { AlbionItemSlot } from '../slot';
import { selectOverallFilters } from 'pages/albion/model';


export const AlbionBuild = () => {
  const { name, tier, enchantment } = useSelector(selectOverallFilters);
  const filterInfoString = `Filter: ${name ?? '<none>'} | T${tier ?? 'X'}.${enchantment ?? 'X'}`;

  return (
    <>
    <p>{filterInfoString}</p>
    <div className='flex flex-row flex-nowrap'>
      <div className='flex flex-col'>
        <AlbionItemSlot type={AlbionItemSlotEnum.Bag} style={{ marginTop: '10px' }} />
        <AlbionItemSlot type={AlbionItemSlotEnum.MainHand} />
        <AlbionItemSlot type={AlbionItemSlotEnum.Potion} />
      </div>
      <div className='flex flex-col'>
        <AlbionItemSlot type={AlbionItemSlotEnum.Helmet} />
        <AlbionItemSlot type={AlbionItemSlotEnum.Armor} />
        <AlbionItemSlot type={AlbionItemSlotEnum.Shoes} />
        <AlbionItemSlot type={AlbionItemSlotEnum.Mount} />
      </div>
      <div className='flex flex-col'>
        <AlbionItemSlot type={AlbionItemSlotEnum.Cape} style={{ marginTop: '10px' }} />
        <AlbionItemSlot type={AlbionItemSlotEnum.OffHand} />
        <AlbionItemSlot type={AlbionItemSlotEnum.Food} />
      </div>
    </div>
  </>
  );
};
