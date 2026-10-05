import { ReactNode } from 'react';
import { ServicesProps } from './types';
import { ServicesClient } from './services-client';
import './services.css';

export function Services(props: ServicesProps): ReactNode {
  return (
    <section className="nk-services">
      <ServicesClient {...props} />
    </section>
  );
}
