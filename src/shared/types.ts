export type SetSelectedPageProp = {
  setSelectedPage: (value: string) => void;
};

export type SelectedPageProp = {
  selectedPage: string;
};

type IsTopOfPageProp = {
  isTopOfPage: boolean;
};

export type SelectedProps = SetSelectedPageProp &
  IsTopOfPageProp & {
    selectedPage: string;
  };

export type LinkProps = SetSelectedPageProp &
  SelectedPageProp & {
    page: string;
  };

export type ActionButtonProps = SetSelectedPageProp & {
  children: React.ReactNode;
};

export type BenefitTypeProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type ClassTypeProps = {
  name: string;
  description?: string;
  image: string;
};
