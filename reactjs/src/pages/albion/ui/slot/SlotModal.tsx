import { ItemSlotType } from 'pages/albion/types';
import { getItemDefsForSlot } from 'pages/albion/utils';


interface AlbionItemSlotModalProps {
  type: ItemSlotType;
  onItemSelected: (name: string) => void;
}

export const AlbionItemSlotModal = ({ type, onItemSelected }: AlbionItemSlotModalProps) => {

  const items = getItemDefsForSlot(type);

  return (
    <div>
      { items.map((item) => (
        <div key={item.name}>
          <button onClick={() => onItemSelected(item.name)}>
            {item.name} | T{item.tier}.{item.enchantment}
          </button>
        </div>
      ))}
    </div>
  )
};