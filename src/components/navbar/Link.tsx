import { FC } from 'react';
import { LinkProps } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link: FC<LinkProps> = ({
  page,
  selectedPage,
  setSelectedPage,
}: LinkProps) => {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, '');

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
