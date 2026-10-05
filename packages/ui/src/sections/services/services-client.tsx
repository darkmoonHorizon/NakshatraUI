'use client';

import { ReactNode } from 'react';
import { ServicesClientProps } from './types';
import { ServicesLabel } from './components/services-label/services-label';
import { ServicesHeading } from './components/services-heading/services-heading';
import { ServicesItem } from './components/services-item/services-item';

export function ServicesClient({ label, primaryText, secondaryText, items }: ServicesClientProps): ReactNode {
  return (
    <>
      <div className="nk-services-layout">
        <ServicesLabel label={label} />
        <ServicesHeading primaryText={primaryText} secondaryText={secondaryText} />
      </div>
      <div className="nk-services-items">
        {items?.map((item) => (
          <ServicesItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
