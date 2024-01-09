import { FC } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ActionButtonProps } from './types';

const ActionButton: FC<ActionButtonProps> = ({
  children,
  setSelectedPage,
}: ActionButtonProps) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white dark:bg-primary-500 dark:text-white dark:hover:bg-secondary-500'
      onClick={() => setSelectedPage('contactus')}
      href='#contactus'
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
