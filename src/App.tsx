import { useState, FC, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Home from './components/home';
import Benefits from './components/benefits';
import OurClasses from './components/ourClasses';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

const App: FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-gray-20 text-gray-500 transition-colors duration-1000 dark:text-gray-10'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
