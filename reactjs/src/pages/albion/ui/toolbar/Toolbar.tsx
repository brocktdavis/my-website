import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

const BG = 'bg-emerald-950 shadow-emerald-950 shadow-md';

const ACTIONS = [
  { title: 'Create Build' },
];

interface HeaderItemProps {
  title: string;
  onClick: () => void;
}

const BarHeaderItem = ({ title, onClick }: HeaderItemProps) => (
  <button key={title} onClick={onClick} className='text-lg text-white font-medium hover:text-gray-300'>
    {title}
  </button>
);


const MenuHeaderItem = ({ title, onClick }: HeaderItemProps) => (
  <button key={title} onClick={onClick} className='block px-4 py-2 text-lg text-white hover:bg-emerald-900'>
    {title}
  </button>
);


export const AlbionBuildToolbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ selectedActionIndex, setSelectedActionIndex ] = useState(0);

  console.log('Selection Action Index: ', selectedActionIndex);

  return (
    <header className={`${BG} w-full`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <nav className='hidden sm:flex space-x-8'>
            { ACTIONS.map((action, index) => (
              <BarHeaderItem key={action.title} onClick={() => setSelectedActionIndex(index)} {...action} />
            ))}
          </nav>

          <div className='flex sm:hidden w-full justify-end'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white hover:text-gray-300 focus:outline-none'
            >
              { isOpen ? <MdClose className='w-6 h-6' /> : <MdMenu className='w-6 h-6' />}
            </button>
          </div>
        </div>
      </div>
      { isOpen && (
        <nav className={`${BG} sm:hidden fixed top-16 left-0 z-50 w-full text-end`}>
          { ACTIONS.map((action, index) => (
            <MenuHeaderItem key={action.title} onClick={() => setSelectedActionIndex(index)} {...action} />
          ))}
        </nav>
      )}
    </header>
  );
};
