'use client';

import { useEffect, ReactNode, RefObject } from 'react';

interface NavbarOverlayProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
  children: ReactNode;
}

export function NavbarOverlay({ isOpen, setIsOpen, triggerRef, children }: NavbarOverlayProps): ReactNode {
  // Escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e: KeyboardEvent) => { 
      if (e.key === 'Escape') {
        setIsOpen(false); 
        triggerRef.current?.focus();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, setIsOpen, triggerRef]);

  return (
    <div 
      id="navbar-menu"
      className="nk-navbar-overlay"
      data-state={isOpen ? 'open' : 'closed'}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
}

