import { FC, useState, useContext } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import './index.css';
import Link from './Link';
import { SelectedProps } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { ThemeContext } from '@/context/ThemeContext';

const Navbar: FC<SelectedProps> = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: SelectedProps) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = 'flex items-center justify-between';
  const navbarBackground = isTopOfPage
    ? ''
    : 'bg-primary-100 drop-shadow dark:bg-dark-80 dark:text-gray-10';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt='logo' src={Logo} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page='Home'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Benefits'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Our Classes'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Contact Us'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>

                  <div className='w-9 h-9 flex justify-center items-center hover:cursor-pointer hover:bg-gray-10 hover:rounded-full hover:transition-all hover:ease-in-out hover:duration-300 '>
                    {theme === 'light' ? (
                      <svg
                        stroke='currentColor'
                        fill='black'
                        strokeWidth='0'
                        viewBox='0 0 512 512'
                        height='22px'
                        width='22px'
                        xmlns='http://www.w3.org/2000/svg'
                        onClick={() => {
                          setTheme('dark');
                          document
                            .querySelector('html')
                            ?.setAttribute('class', 'dark');
                        }}
                      >
                        <path d='M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z' />
                      </svg>
                    ) : (
                      <svg
                        stroke='currentColor'
                        fill='#facd3d'
                        strokeWidth='0'
                        viewBox='0 0 512 512'
                        height='22px'
                        width='22px'
                        xmlns='http://www.w3.org/2000/svg'
                        onClick={() => {
                          setTheme('light');
                          document
                            .querySelector('html')
                            ?.setAttribute('class', 'light');
                        }}
                      >
                        <path d='M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z' />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <button
                className='rounded-full bg-secondary-500 p-2'
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className='h-6 w-6 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl dark:bg-dark-80 dark:text-gray-10'>
          {/* CLOSE ICON */}
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Benefits'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Our Classes'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact Us'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className='w-9 h-9 flex justify-center items-center hover:cursor-pointer hover:bg-gray-10 hover:rounded-full hover:transition-all hover:ease-in-out hover:duration-300 '>
              {theme === 'light' ? (
                <svg
                  stroke='currentColor'
                  fill='black'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='22px'
                  width='22px'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => {
                    setTheme('dark');
                    document
                      .querySelector('html')
                      ?.setAttribute('class', 'dark');
                  }}
                >
                  <path d='M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z' />
                </svg>
              ) : (
                <svg
                  stroke='currentColor'
                  fill='#facd3d'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='22px'
                  width='22px'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => {
                    setTheme('light');
                    document
                      .querySelector('html')
                      ?.setAttribute('class', 'light');
                  }}
                >
                  <path d='M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z' />
                </svg>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
