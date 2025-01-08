import { AlbionItemSlotEnum } from 'pages/albion/model';
import { getItemDefsForSlot } from 'pages/albion/utils';


interface AlbionItemSlotModalProps {
  type: AlbionItemSlotEnum;
  onItemSelected: (name: string) => void;
}

export const AlbionItemSlotModal = ({ type, onItemSelected }: AlbionItemSlotModalProps) => {

  const items = getItemDefsForSlot(type);

  return (
    <div>
      { items.map((item) => (
        <div key={item.name}>
          <button onClick={() => onItemSelected(item.name)}>
            {item.name}
          </button>
        </div>
      ))}
    </div>
  )
};