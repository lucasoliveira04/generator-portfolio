import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  anchorRef: React.RefObject<HTMLElement | null>;
}

export const SideModal = ({
  isOpen,
  onClose,
  children,
  anchorRef,
}: SideModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (isOpen && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.right + window.scrollX,
      });
    }
  }, [isOpen, anchorRef]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyOpen = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const clickOutZone = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyOpen);
    document.addEventListener("mousedown", clickOutZone);
    return () => {
      document.removeEventListener("keydown", handleKeyOpen);
      document.removeEventListener("mousedown", clickOutZone);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !anchorRef.current || !modalRef.current) return;

    const anchorRect = anchorRef.current.getBoundingClientRect();
    const modal = modalRef.current;

    const modalWidth = modal.offsetWidth;
    const modalHeight = modal.offsetHeight;

    let top = anchorRect.bottom + 8;
    let left = anchorRect.left;

    // Se não cabe pra baixo, joga pra cima
    if (top + modalHeight > window.innerHeight) {
      top = anchorRect.top - modalHeight - 8;
    }

    // Se não cabe pra direita, joga pra esquerda
    if (left + modalWidth > window.innerWidth) {
      left = anchorRect.right - modalWidth;
    }

    // Garante que nunca vá pra fora da tela
    top = Math.max(8, Math.min(top, window.innerHeight - modalHeight - 8));
    left = Math.max(8, Math.min(left, window.innerWidth - modalWidth - 8));

    modal.style.top = `${top}px`;
    modal.style.left = `${left}px`;
  }, [isOpen, anchorRef]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }}
      className="p-2 bg-white border rounded shadow-md min-w-[120px]"
    >
      {children}
    </div>,
    document.body
  );
};
