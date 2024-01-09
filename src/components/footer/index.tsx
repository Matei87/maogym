import { FC } from 'react';
import { MapPinIcon, PhoneIcon, AtSymbolIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';

const Footer: FC = () => {
  return (
    <footer className='bg-primary-100 py-16 dark:bg-dark-80 dark:text-gray-10'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img alt='logo' src={Logo} />
          <p className='my-5 text-base'>
            We offer high standards that will satisfy even the most demanding
            customers. You will do the training enjoying high-performance
            equipment, modern and special design, a team of professional
            trainers ready to share their knowledge with you and a front desk
            always ready to make your experience as relaxing as possible.
          </p>
          <p>© MAOGYM All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0 flex flex-col '>
          <h4 className='font-bold'>Links</h4>
          <div className='mt-5 flex flex-col gap-5'>
            <a href='#home'>Home</a>
            <a href='#benefits'>Benefits</a>
            <a href='#ourclasses'>Our Classes</a>
            <a href='#contactus'>Contact us</a>
          </div>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact</h4>
          <div className='mt-5 gap-5 flex flex-col text-base'>
            <span className='flex items-center'>
              <MapPinIcon className='h-5 w-5 mr-1' /> New York, 15 West 2th
              Street
            </span>
            <span className='flex items-center'>
              <PhoneIcon className='h-5 w-5 mr-1' /> (333)425-6825
            </span>
            <span className='flex items-center'>
              <AtSymbolIcon className='h-5 w-5 mr-1' /> contact@maogym.net
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
