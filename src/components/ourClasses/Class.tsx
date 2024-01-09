import { FC } from 'react';
import { ClassTypeProps } from '@/shared/types';

const Class: FC<ClassTypeProps> = ({
  name,
  description,
  image,
}: ClassTypeProps) => {
  const overlayStyles = `p-5 absolute z-29 flex
    h-[360px] w-[100%] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90 hover:cursor-pointer`;

  return (
    <li className='relative h-[360px] w-[46rem] dark:brightness-[.8]'>
      <div className={overlayStyles}>
        <p className='text-2xl'>{name}</p>
        <p className='mt-5'>{description}</p>
      </div>
      <img
        alt={`${image}`}
        src={image}
        className='w-[100%] h-[100%] object-cover object-top'
      />
    </li>
  );
};

export default Class;
