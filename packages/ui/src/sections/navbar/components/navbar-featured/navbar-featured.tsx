import { CSSProperties, ReactNode } from 'react';
import { NavbarFeaturedProject } from '../../types';

interface NavbarFeaturedProps {
  featuredProjects: readonly NavbarFeaturedProject[];
  featuredColIndex: number;
}

export function NavbarFeatured({ featuredProjects, featuredColIndex }: NavbarFeaturedProps): ReactNode {
  return (
    <aside className="nk-navbar-featured" style={{ '--stagger-col': featuredColIndex } as CSSProperties}>
      {featuredProjects.map((project, projIdx) => (
        <a 
          key={project.id} 
          href={project.href} 
          className="nk-navbar-featured-card"
          style={{ '--stagger-row': projIdx } as CSSProperties}
        >
          <div 
            className="nk-navbar-card-img-wrapper"
            style={{ position: 'relative', width: '100%', paddingBottom: '150%' }}
          >
            <img src={project.imageUrl} alt={project.title} className="nk-navbar-card-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="nk-navbar-card-info">
            <div className="nk-navbar-card-header">
              <h4 className="nk-navbar-card-title">{project.title}</h4>
              <span className="nk-navbar-card-arrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </div>
            <p className="nk-navbar-card-category">{project.category}</p>
          </div>
        </a>
      ))}
    </aside>
  );
}

