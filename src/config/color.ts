import * as CSS from "csstype";

interface ColorOptions {
  /**
   * The CSS `color` property
   */
  textColor?: CSS.Property.Color;
  /**
   * The CSS `color` property
   */
  color?: CSS.Property.Color;
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: CSS.Property.Color;
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: CSS.Property.Color;
}

export default ColorOptions;
