import { useState } from "react";
import { BlockBase } from "../../core/BlockBase";
import type { TextBlockHyperLinkProps } from "../../../types/textBlockProps";

export const TextBlockHyperLink = ({
  href,
  content,
  target = "_self",
  ...rest
}: TextBlockHyperLinkProps) => {
  const [text, setText] = useState(content);
  const [link, setLink] = useState(href);

  return (
    <BlockBase {...rest}>
      {({ isEditing }) =>
        isEditing ? (
          <div className="flex flex-col space-y-1">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-gray-200 text-black px-1 py-0 outline-none rounded"
            />
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Link aqui"
              className="bg-gray-200 text-black px-1 py-0 outline-none rounded"
            />
          </div>
        ) : (
          <a
            href={link}
            target={target}
            className="hover:text-blue-400 transition-colors"
          >
            {text}
          </a>
        )
      }
    </BlockBase>
  );
};
