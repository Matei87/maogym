import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SetSelectedPageProp } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from '@/shared/HText';

const ContactUs: FC<SetSelectedPageProp> = ({
  setSelectedPage,
}: SetSelectedPageProp) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white outline-none dark:bg-dark-80 dark:text-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id='contactus' className='dark:bg-zinc-700 dark:text-gray-10'>
      <div className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={() => setSelectedPage('contactus')}>
          {/* HEADER */}
          <motion.div
            className='md:w-3/5'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.35, ease: 'linear' }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              <span className='text-primary-500'>JOIN NOW</span> TO GET IN
              SHAPE.
            </HText>
            <p className='my-5'>
              Our mission is to offer the best services aimed at helping people,
              regardless of their training level, to improve their lifestyle and
              physical condition. Our programs have proven effective globally
              and have achieved unparalleled results. We invite you to message
              us if you have any question and take part in a training session
              with our team.
            </p>
          </motion.div>

          {/* FORM AND IMAGE */}
          <div className='mt-10 justify-between gap-8 md:flex'>
            <motion.div
              className='mt-10 basis-3/5 md:mt-0'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.35, ease: 'linear' }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form onSubmit={onSubmit}>
                <input
                  className={inputStyles}
                  type='text'
                  placeholder='NAME'
                  {...register('name', {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className='mt-1 text-primary-500'>
                    {errors.name.type === 'required' &&
                      'This field is required.'}
                    {errors.name.type === 'maxLength' &&
                      'Max length is 100 char.'}
                  </p>
                )}

                <input
                  className={inputStyles}
                  type='text'
                  placeholder='EMAIL'
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className='mt-1 text-primary-500'>
                    {errors.email.type === 'required' &&
                      'This field is required.'}
                    {errors.email.type === 'pattern' &&
                      'Invalid email address.'}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  placeholder='MESSAGE'
                  rows={4}
                  cols={50}
                  {...register('message', {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className='mt-1 text-primary-500'>
                    {errors.message.type === 'required' &&
                      'This field is required.'}
                    {errors.message.type === 'maxLength' &&
                      'Max length is 2000 char.'}
                  </p>
                )}

                <button
                  type='submit'
                  className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white dark:bg-primary-500 dark:text-white dark:hover:bg-secondary-500'
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>

            <motion.div
              className='relative mt-16 basis-2/5 md:mt-0'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.35, ease: 'linear' }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className='w-full before:absolute before:-bottom-20 before:-right-10 before:z-0 md:before:content-evolvetext'>
                <img
                  className='w-full relative z-10 dark:brightness-[.8]'
                  alt='contact-us-page-graphic'
                  src={ContactUsPageGraphic}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
