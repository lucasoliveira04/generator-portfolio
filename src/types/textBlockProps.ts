export type TextBlockProps = {
  content: string;
  style?: React.CSSProperties;
  className?: string;
  isSet: boolean;
  draggable?: boolean;
  nodeRef?: React.RefObject<HTMLDivElement>;
};
export type TextBlockHyperLinkProps = TextBlockProps & {
  href: string;
  target?: "_blank" | "_self";
};
