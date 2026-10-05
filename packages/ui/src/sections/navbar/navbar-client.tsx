'use client';

import { useState, useRef, ReactNode } from 'react';
import { NavbarClientProps } from './types';
import { NavbarTrigger } from './components/navbar-trigger/navbar-trigger';
import { NavbarHeader } from './components/navbar-header/navbar-header';
import { NavbarNavList } from './components/navbar-nav-list/navbar-nav-list';
import { NavbarFeatured } from './components/navbar-featured/navbar-featured';
import { NavbarOverlay } from './components/navbar-overlay/navbar-overlay';

export function NavbarClient({ columns, featuredProjects }: NavbarClientProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const featuredColIndex = columns.length;

  return (
    <>
      <NavbarTrigger 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        triggerRef={triggerRef} 
      />

      <NavbarOverlay isOpen={isOpen} setIsOpen={setIsOpen} triggerRef={triggerRef}>
        <NavbarHeader 
          setIsOpen={setIsOpen} 
          triggerRef={triggerRef} 
        />
        
        <div className="nk-navbar-content-grid">
          <NavbarNavList columns={columns} />
          
          <NavbarFeatured 
            featuredProjects={featuredProjects} 
            featuredColIndex={featuredColIndex} 
          />
        </div>
      </NavbarOverlay>
    </>
  );
}

