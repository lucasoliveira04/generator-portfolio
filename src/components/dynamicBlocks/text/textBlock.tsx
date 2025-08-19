import { useState } from "react";
import { BlockBase } from "../../core/BlockBase";
import type { TextBlockProps } from "../../../types/textBlockProps";

export const TextBlock = ({
  content,
  onChange,
  ...rest
}: TextBlockProps & { onChange?: (value: string) => void }) => {
  const [text, setText] = useState(content);

  const handleChange = (value: string) => {
    setText(value);
    onChange?.(value);
  };

  return (
    <BlockBase {...rest}>
      {({ isEditing }) =>
        isEditing ? (
          <input
            type="text"
            value={text}
            autoFocus
            onChange={(e) => handleChange(e.target.value)}
            className="bg-gray-200 text-black px-1 py-0 outline-none rounded"
          />
        ) : (
          <p>{text}</p>
        )
      }
    </BlockBase>
  );
};
