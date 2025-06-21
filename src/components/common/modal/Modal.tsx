import { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import './modal.css';
import type { ModalProps } from './modal.props';

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [visible, setVisible] = useState(isOpen);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [ isOpen ]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    if (contentRef.current) contentRef.current.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
    });

    if (overlayRef.current) overlayRef.current.addEventListener('click', onClose);

    return () => document.removeEventListener('keydown', handleEsc);
  }, [ onClose ]);

  const handleAnimationEnd = () => {
    if (!isOpen) setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={ overlayRef }
      className={ `modal-overlay ${ isOpen ? 'fade-in' : 'fade-out' }` }
      onAnimationEnd={ handleAnimationEnd }
    >
      <div
        ref={ contentRef }
        className="modal-container"
      >
        <button className="modal-close" onClick={ onClose }><IoMdClose /></button>
        { children }
      </div>
    </div>
  );
};
