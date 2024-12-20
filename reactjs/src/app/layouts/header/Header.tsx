import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Outlet } from 'react-router';

const BG = 'bg-emerald-950 shadow-emerald-950 shadow-md';

const PAGES = [
  { title: 'Home', href: '#home' },
  { title: 'Blog', href: '#blog' },
  { title: 'About', href: '#about' },
];

interface HeaderItemProps {
  href: string;
  title: string;
}

const BarHeaderItem = ({ href, title }: HeaderItemProps) => (
  <a href={href} className='text-lg text-white font-medium hover:text-gray-300'>
    {title}
  </a>
);

const MenuHeaderItem = ({ href, title }: HeaderItemProps) => (
  <a href={href} className='block px-4 py-2 text-lg text-white hover:bg-emerald-900'>
    {title}
  </a>
);

export const HeaderLayout = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
    <header className={`${BG} w-full`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <nav className='hidden sm:flex space-x-8'>
            { PAGES.map(({ href, title }) => (
              <BarHeaderItem href={href} title={title} key={href} />
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
          { PAGES.map(({ href, title }) => (
            <MenuHeaderItem href={href} title={title} key={href} />
          ))}
        </nav>
      )}
    </header>
    <Outlet />
    </>
  );
};
