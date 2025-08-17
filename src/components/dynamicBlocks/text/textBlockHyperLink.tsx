import { useState, useRef } from "react";
import Draggable from "react-draggable";
import type { TextBlockHyperLinkProps } from "../../../types/textBlockProps";

export const TextBlockHyperLink = ({
  href,
  target = "_self",
  content,
  className,
  style,
  isSet,
  draggable = false,
}: TextBlockHyperLinkProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(content);
  const [link, setLink] = useState(href);

  const nodeRef = useRef<HTMLDivElement>(null);

  const handleBlur = () => setIsEditing(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") setIsEditing(false);
  };

  const contentBlock = (
    <div ref={nodeRef} className={className} style={style}>
      {isSet && isEditing ? (
        <div className="flex flex-col space-y-1">
          <input
            type="text"
            value={text}
            autoFocus
            placeholder="Texto do link"
            onChange={(e) => setText(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="bg-gray-200 text-black px-1 py-0 outline-none rounded"
          />
          <input
            type="text"
            value={link}
            placeholder="URL do link"
            onChange={(e) => setLink(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="bg-gray-200 text-black px-1 py-0 outline-none rounded"
          />
        </div>
      ) : (
        <a
          href={link}
          target={target}
          onClick={() => isSet && setIsEditing(true)}
          className="hover:text-blue-400 transition-colors"
        >
          {text}
        </a>
      )}
    </div>
  );

  return draggable ? <Draggable nodeRef={nodeRef}>{contentBlock}</Draggable> : contentBlock;
};
