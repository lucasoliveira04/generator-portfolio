import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { SideModal } from "../dynamicBlocks/SideModal";

interface BlockBaseProps {
  children: (mode: { isEditing: boolean }) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const BlockBase = ({ children, className, style }: BlockBaseProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const blockRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    setIsEditing(true);
    setIsMoving(false);
    setShowModal(false);
  };

  const handleMove = () => {
    setIsMoving(true);
    setIsEditing(false);
    setShowModal(false);
  };

  const content = (
    <div
      ref={blockRef}
      className={`inline-block cursor-pointer ${className}`}
      style={style}
      onClick={() => setShowModal((prev) => !prev)}
    >
      {children({ isEditing })}
    </div>
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditing) {
        if (event.key === "Escape") {
          setIsEditing(false);
          setIsMoving(false);
        } else if (event.key === "Enter") {
          setIsEditing(false);
          setIsMoving(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEditing]);

  return (
    <>
      {isMoving ? (
        <Draggable
          nodeRef={blockRef}
          position={position}
          onDrag={(_e, data) => setPosition({ x: data.x, y: data.y })}
          onStop={() => setIsMoving(false)}
        >
          {content}
        </Draggable>
      ) : (
        <div
          ref={blockRef}
          className={`inline-block cursor-pointer ${className}`}
          style={{
            ...style,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          onClick={() => setShowModal((prev) => !prev)}
        >
          {children({ isEditing })}
        </div>
      )}

      <SideModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        anchorRef={blockRef}
      >
        <button
          className="w-full text-left px-2 py-1 text-black hover:bg-gray-200 rounded"
          onClick={handleEdit}
        >
          Editar
        </button>
        <button
          className="w-full text-left px-2 py-1 text-black hover:bg-gray-200 rounded"
          onClick={handleMove}
        >
          Mover
        </button>
      </SideModal>
    </>
  );
};
