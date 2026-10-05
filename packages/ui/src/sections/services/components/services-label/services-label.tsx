import { ReactNode } from 'react';

interface ServicesLabelProps {
  label: string;
}

export function ServicesLabel({ label }: ServicesLabelProps): ReactNode {
  return <div className="nk-services-label">{label}</div>;
}

