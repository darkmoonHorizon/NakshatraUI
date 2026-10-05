export interface ServiceItem {
  id: string;
  number: string;
  description: string;
  title: string;
  imageUrl?: string;
}

export interface ServicesProps {
  readonly label: string;
  readonly primaryText: string;
  readonly secondaryText: string;
  readonly items: ServiceItem[];
}

export type ServicesClientProps = ServicesProps;

export function isServicesProps(obj: Partial<ServicesProps> | null | undefined): obj is ServicesProps {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.label === 'string' &&
    typeof obj.primaryText === 'string' &&
    typeof obj.secondaryText === 'string'
  );
}

