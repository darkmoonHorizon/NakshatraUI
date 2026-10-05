export interface SectionVariantMetadata {
  name: string;
  description: string;
  capabilities: string[];
}

export interface SectionMetadata {
  id: string;
  name: string;
  description: string;
  variants: Record<string, SectionVariantMetadata>;
}

