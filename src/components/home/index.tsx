import { FC } from 'react';
import { SetSelectedPageProp } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const Home: FC<SetSelectedPageProp> = ({
  setSelectedPage,
}: SetSelectedPageProp) => {
  return (
    <section
      id='home'
      className='relative gap-16 bg-gray-20 pt-10 md:h-full md:pb-0 dark:bg-zinc-700 dark:text-gray-10'
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
        onViewportEnter={() => setSelectedPage('home')}
      >
        {/* MAIN HEADER */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* HEADINGS */}
          <motion.div
            className='md:-mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.35, ease: 'linear' }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img
                  className='dark:brightness-[.8]'
                  alt='home-page-text'
                  src={HomePageText}
                />
              </div>
            </div>

            <p className='mt-8 text-sm'>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className='mt-8 flex items-center gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.35, ease: 'linear' }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={() => setSelectedPage('contactus')}
              href='#contactus'
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className='flex basis-3/5 justify-center md:z-10
          md:ml-40 md:mt-16 md:justify-items-end'
        >
          <img
            className='dark:brightness-[.8]'
            alt='home-pageGraphic'
            src={HomePageGraphic}
          />
        </div>
      </motion.div>

      {/* SPONSORS */}

      <div className=' w-full flex items-center justify-center bg-primary-100 dark:bg-dark-80 dark:text-gray-10 md:h-1/6 max-md:h-[200px]'>
        <div className='mx-auto w-5/6 flex items-center justify-center max-md:flex-col'>
          <div className='flex w-3/5 items-center justify-between gap-8 max-md:flex-col'>
            <img
              className='dark:brightness-[.8]'
              alt='redbull-sponsor'
              src={SponsorRedBull}
            />
            <img
              className='dark:brightness-[.8]'
              alt='forbes-sponsor'
              src={SponsorForbes}
            />
            <img
              className='dark:brightness-[.8]'
              alt='fortune-sponsor'
              src={SponsorFortune}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
