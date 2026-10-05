import { ReactNode } from 'react';

interface ServicesHeadingProps {
  primaryText: string;
  secondaryText: string;
}

export function ServicesHeading({ primaryText, secondaryText }: ServicesHeadingProps): ReactNode {
  return (
    <h2 className="nk-services-heading">
      <span className="nk-services-heading-primary">{primaryText}</span>
      <span className="nk-services-heading-secondary">{secondaryText}</span>
    </h2>
  );
}

