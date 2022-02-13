import * as CSS from "csstype";

interface BackgroundOptions {
  /**
   * The CSS `background` property
   */
  bg?: CSS.Property.Color;
  /**
   * The CSS `background-clip` property
   */
  bgClip?: CSS.Property.BackgroundClip | "text";
  /**
   * The CSS `background-clip` property
   */
  backgroundClip?: CSS.Property.BackgroundClip | "text";
  /**
   * The CSS `background` property
   */
  background?: CSS.Property.Color;
  /**
   * The CSS `background-color` property
   */
  bgColor?: CSS.Property.Color;
  /**
   * The CSS `background-color` property
   */
  backgroundColor?: CSS.Property.Color;
  /**
   * The CSS `background-image` property
   */
  backgroundImage?: CSS.Property.BackgroundImage;
  /**
   * The background-gradient shorthand
   */
  bgGradient?: CSS.Property.BackgroundImage;
  /**
   * The CSS `background-size` property
   */
  backgroundSize?: CSS.Property.BackgroundSize | number;
  /**
   * The CSS `background-position` property
   */
  bgPos?: CSS.Property.BackgroundPosition | number;
  /**
   * The CSS `background-position` property
   */
  backgroundPosition?: CSS.Property.BackgroundPosition | number;
  /**
   * The CSS `background-image` property
   */
  bgImage?: CSS.Property.BackgroundImage;
  /**
   * The CSS `background-image` property
   */
  bgImg?: CSS.Property.BackgroundImage;
  /**
   * The CSS `background-repeat` property
   */
  bgRepeat?: CSS.Property.BackgroundRepeat;
  /**
   * The CSS `background-repeat` property
   */
  backgroundRepeat?: CSS.Property.BackgroundRepeat;
  /**
   * The CSS `background-size` property
   */
  bgSize?: CSS.Property.BackgroundSize | number;
  /**
   * The CSS `background-attachment` property
   */
  bgAttachment?: CSS.Property.BackgroundAttachment;
  /**
   * The CSS `background-attachment` property
   */
  backgroundAttachment?: CSS.Property.BackgroundAttachment;
  /**
   * The CSS `background-position` property
   */
  bgPosition?: CSS.Property.BackgroundPosition | number;
}

export default BackgroundOptions;