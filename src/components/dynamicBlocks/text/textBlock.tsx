import { useState } from "react";
import type { TextBlockProps } from "../../../types/textBlockProps";

export const TextBlock = ({
  content,
  style,
  className,
  isSet,
}: TextBlockProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(content);

  const handleBlur = () => setIsEditing(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") setIsEditing(false);
  };

  return (
    <div className={`p-4 border-b ${className}`} style={style}>
      {isSet && isEditing ? (
        <input
          type="text"
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="bg-gray-200 text-black px-1 py-0 outline-none rounded"
        />
      ) : (
        <p onClick={() => isSet && setIsEditing(true)}>{text}</p>
      )}
    </div>
  );
};
