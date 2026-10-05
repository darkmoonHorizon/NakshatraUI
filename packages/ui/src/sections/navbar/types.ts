export interface NavbarLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

export interface NavbarColumn {
  readonly title: string;
  readonly links: readonly NavbarLink[];
}

export interface NavbarFeaturedProject {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly imageUrl: string;
  readonly href: string;
}

export interface NavbarProps {
  readonly columns: readonly NavbarColumn[];
  readonly featuredProjects: readonly NavbarFeaturedProject[];
}

export type NavbarClientProps = NavbarProps;

// --- Runtime Type Guards (No external dependencies) ---

export function isNavbarLink(obj: Partial<NavbarLink> | null | undefined): obj is NavbarLink {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.label === 'string' &&
    typeof obj.href === 'string' &&
    (obj.isExternal === undefined || typeof obj.isExternal === 'boolean')
  );
}

export function isNavbarColumn(obj: Partial<NavbarColumn> | null | undefined): obj is NavbarColumn {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.title === 'string' &&
    Array.isArray(obj.links) &&
    obj.links.every(isNavbarLink)
  );
}

export function isNavbarFeaturedProject(obj: Partial<NavbarFeaturedProject> | null | undefined): obj is NavbarFeaturedProject {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.category === 'string' &&
    typeof obj.imageUrl === 'string' &&
    typeof obj.href === 'string'
  );
}

export function isNavbarProps(obj: Partial<NavbarProps> | null | undefined): obj is NavbarProps {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Array.isArray(obj.columns) &&
    obj.columns.every(isNavbarColumn) &&
    Array.isArray(obj.featuredProjects) &&
    obj.featuredProjects.every(isNavbarFeaturedProject)
  );
}
