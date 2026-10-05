import { CSSProperties, ReactNode } from 'react';
import { NavbarColumn } from '../../types';

interface NavbarNavListProps {
  columns: readonly NavbarColumn[];
}

export function NavbarNavList({ columns }: NavbarNavListProps): ReactNode {
  return (
    <nav className="nk-navbar-columns">
      {columns.map((col, colIdx) => (
        <div 
          key={col.title} 
          className="nk-navbar-column" 
          style={{ '--stagger-col': colIdx } as CSSProperties}
        >
          <h3 className="nk-navbar-col-title" style={{ '--stagger-row': 0 } as CSSProperties}>{col.title}</h3>
          <ul className="nk-navbar-link-list">
            {col.links.map((link, linkIdx) => (
              <li 
                key={link.href} 
                className="nk-navbar-nav-item"
                style={{ '--stagger-row': linkIdx + 1 } as CSSProperties}
              >
                <a href={link.href} className="nk-navbar-nav-link">
                  {link.label}
                  <span className="nk-navbar-icon-3d-wrapper">
                    <span className="nk-navbar-icon-3d-front">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                    <span className="nk-navbar-icon-3d-bottom">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

