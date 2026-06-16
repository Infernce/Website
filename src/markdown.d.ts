declare module "*.md" {
  const content: string;
  export default content;
}

declare module "*.md?raw" {
  const content: string;
  export default content;
}

declare module '*.mdx' {
  import { ComponentType } from 'react';

  const MDXComponent: ComponentType<any>;
  export default MDXComponent;
}