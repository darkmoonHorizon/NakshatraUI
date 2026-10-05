export interface DesignTheme {
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface DesignSection {
  id: string;
  type: string;
  variant: string;
  props: Record<string, unknown>;
}

export interface DesignDocument {
  version: string;
  theme: DesignTheme;
  sections: DesignSection[];
}

