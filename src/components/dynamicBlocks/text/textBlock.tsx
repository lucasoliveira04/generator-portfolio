import { useState } from "react";
import { BlockBase } from "../../core/BlockBase";
import type { TextBlockProps } from "../../../types/textBlockProps";

export const TextBlock = ({ content, ...rest }: TextBlockProps) => {
  const [text, setText] = useState(content);

  return (
    <BlockBase {...rest}>
      {({ isEditing }) =>
        isEditing ? (
          <input
            type="text"
            value={text}
            autoFocus
            onChange={(e) => setText(e.target.value)}
            className="bg-gray-200 text-black px-1 py-0 outline-none rounded"
          />
        ) : (
          <p>{text}</p>
        )
      }
    </BlockBase>
  );
};
