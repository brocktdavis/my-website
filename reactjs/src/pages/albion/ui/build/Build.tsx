import { useSelector } from 'react-redux';
import { AlbionItemSlotEnum, selectOverallFilters } from 'pages/albion/model';
import { AlbionItemSlot } from '../slot';

export const AlbionBuild = () => {
  const { name, tiers: tier, enchantments: enchantment } = useSelector(selectOverallFilters);
  const filterInfoString = `Filter: ${name ?? '<none>'} | T${tier ?? 'X'}.${enchantment ?? 'X'}`;

  return (
    <>
    <p>{filterInfoString}</p>
    <div className='flex flex-row flex-nowrap'>
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
