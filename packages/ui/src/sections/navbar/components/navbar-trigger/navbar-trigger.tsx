import { RefObject, ReactNode } from 'react';

interface NavbarTriggerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function NavbarTrigger({ isOpen, setIsOpen, triggerRef }: NavbarTriggerProps): ReactNode {
  return (
    <button 
      ref={triggerRef}
      onClick={() => setIsOpen(true)} 
      aria-expanded={isOpen}
      aria-controls="navbar-menu"
      aria-label="Open navigation menu"
      className="nk-navbar-trigger"
      style={{ 
        opacity: isOpen ? 0 : 1, 
        pointerEvents: isOpen ? 'none' : 'auto',
        transition: 'opacity 0.2s ease'
      }}
    >
      MENU
    </button>
  );
}
