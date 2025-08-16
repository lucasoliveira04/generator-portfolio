export type HeaderProps = {
  title: {
    color: string;
    size: string;
    isBold: boolean;
    text: string;
    path?: string;
  }[];

  nav: {
    text: string;
    style: {
      color?: string;
      border?: string;
      background?: string;
      classNameStyle?: string;
    };
    path: string;
  }[];

  select?: {
    style: {
      color?: string;
      border?: string;
      background?: string;
      classNameStyle?: string;
    };
    option: {
      text: string;
      style: {
        color?: string;
        border?: string;
        background?: string;
        classNameStyle?: string;
      };
    }[];
  }[];

  logo?: {
    src: string;
    alt: string;
  };
  styleHeader: string;
  styleNav: string;
};
