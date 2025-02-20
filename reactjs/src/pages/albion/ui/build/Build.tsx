import { useRef } from 'react';
import { domToPng } from 'modern-screenshot';
import { AlbionItemSlotEnum } from 'pages/albion/model';
import { AlbionFilters } from '../filters';
import { AlbionItemSlot } from '../slot';

export const AlbionBuild = () => {
  const buildRef = useRef(null);

  const handleExport = async () => {
    if (buildRef.current) {
      const image = await domToPng(buildRef.current);

      // Create a download link
      const link = document.createElement("a");
      link.href = image;
      link.download = "exported-image.png";
      link.click();
    }
  };

  return (
    <>
    <button onClick={handleExport}>
      Export
    </button>
    <AlbionFilters slot={null} />
    <div ref={buildRef} className='flex flex-row flex-nowrap justify-center'>
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
