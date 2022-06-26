export declare global {
  declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }

  declare module "*.jpg" {
    const src: string;
    export default src;
  }

  declare module "*.png" {
    const src: string;
    export default src;
  }

  declare module "*.gif" {
    const src: string;
    export default src;
  }

  declare module "*.ttf" {
    const src: string;
    export default src;
  }
}