import { RefObject, ReactNode } from 'react';

interface NavbarHeaderProps {
  setIsOpen: (isOpen: boolean) => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function NavbarHeader({ setIsOpen, triggerRef }: NavbarHeaderProps): ReactNode {
  return (
    <div className="nk-navbar-overlay-header">
      <div className="nk-navbar-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
        <span>ballance</span>
      </div>
      <button 
        onClick={() => {
          setIsOpen(false);
          triggerRef.current?.focus();
        }} 
        aria-label="Close menu" 
        className="nk-navbar-close-btn"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <p className="nk-navbar-close-text">close</p>
      </button>
    </div>
  );
}
