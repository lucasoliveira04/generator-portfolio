export type TextBlockProps = {
  content: string;
  style?: React.CSSProperties;
  className?: string;
  isSet: boolean;
};

export type TextBlockHyperLinkProps = TextBlockProps & {
  href: string;
  target?: "_blank" | "_self";
};
