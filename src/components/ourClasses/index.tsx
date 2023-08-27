import { FC } from 'react';
import { SetSelectedPageProp, ClassTypeProps } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';
import { classes } from '@/shared/text';

const OurClasses: FC<SetSelectedPageProp> = ({
  setSelectedPage,
}: SetSelectedPageProp) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
      <motion.div
        onViewportEnter={() => setSelectedPage('ourclasses')}
        className='flex flex-col'
      >
        <motion.div
          className='mx-auto w-5/6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='md:w-3/5'>
            <HText>OUR CLASSES.</HText>
            <p className='pt-5'>
              MAOGYM is a concept that is characterized by respect for our
              customers!
            </p>
            <p>
              By respect we mean offering high standards that will satisfy even
              the most demanding customers. Regardless of the location, you will
              train enjoying high-performance equipment, modern and special
              design, a team of professional trainers ready to share their
              knowledge with you and a front desk always ready to make your
              experience as relaxing as possible. Here you will find everything
              you need for a workout at the end of which you will leave fully
              satisfied!
            </p>
          </div>
        </motion.div>
        <div className='mt-10 mx-auto w-5/6 '>
          <ul className='flex flex-wrap gap-4 justify-center'>
            {classes.map((item: ClassTypeProps, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
