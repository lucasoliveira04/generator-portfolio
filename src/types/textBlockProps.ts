export interface TextBlockProps {
  content?: string;
  isSet?: boolean;
  draggable?: boolean;
  className?: string;
}

export interface TextBlockHyperLinkProps extends TextBlockProps {
  href: string;
  onChange?: (text: unknown | undefined, href: string) => void;
  target?: "_blank" | "_self";
}

export interface TextBlockImageProps extends TextBlockProps {
  src: string;
  alt: string;
}
