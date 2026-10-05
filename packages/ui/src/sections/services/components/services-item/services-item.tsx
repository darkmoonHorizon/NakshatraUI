import { ReactNode } from 'react';
import Image from 'next/image';
import { ServiceItem } from '../../types';
import './services-item.css';

interface ServicesItemProps {
  item: ServiceItem;
}

export function ServicesItem({ item }: ServicesItemProps): ReactNode {
  return (
    <div className="nk-services-item">
      {item.imageUrl && (
        <div className="nk-services-item-bg">
          <Image 
            src={item.imageUrl} 
            alt={item.title} 
            fill 
            className="nk-services-item-bg-image"
          />
          <div className="nk-services-item-bg-overlay" />
        </div>
      )}
      
      <div className="nk-services-item-container">
        <div className="nk-services-item-left">
          <div className="nk-services-item-number">
            {item.number}
          </div>
          <p className="nk-services-item-description">
            {item.description}
          </p>
        </div>
        <div className="nk-services-item-right">
          <div className="nk-services-item-title-wrapper">
            <h3 className="nk-services-item-title">{item.title}</h3>
            <div className="nk-services-item-title-line" />
          </div>
          <svg className="nk-services-item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
