import { ReactNode } from 'react';
import { NavbarProps } from './types';
import { NavbarClient } from './navbar-client';

export function Navbar({ columns, featuredProjects }: NavbarProps): ReactNode {
  return (
    <header className="nk-navbar-header">
      <div className="nk-navbar-header-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
        <span>ballance</span>
      </div>
      <NavbarClient columns={columns} featuredProjects={featuredProjects} />
    </header>
  );
}

