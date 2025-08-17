import { useState } from "react";
import type { TextBlockProps } from "../../../types/textBlockProps";

export const TextBlock = ({
  content,
  style,
  className,
  isSet,
  draggable = false,
  nodeRef,
}: TextBlockProps & { draggable?: boolean; nodeRef?: React.RefObject<HTMLDivElement> }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(content);

  const handleBlur = () => setIsEditing(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") setIsEditing(false);
  };

  const block = (
    <div
      ref={nodeRef}
      className={`p-4 border-b cursor-move ${className}`}
      style={style}
    >
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

  return draggable ? <>{block}</> : block;
};
