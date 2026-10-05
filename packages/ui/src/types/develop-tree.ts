export interface DevelopSectionTree {
  schemaVersion: string;
  package: string;
  section: string;
  variant: string;
  imports: string[];
  props: Record<string, unknown>;
  components: Record<string, string>;
  tokens: Record<string, string>;
  styles: Record<string, string>;
  assets: Record<string, string>;
  composition: Record<string, unknown>;
  implementation: Record<string, string>;
  generation: string;
}
