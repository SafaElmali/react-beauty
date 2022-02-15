import * as CSS from 'csstype';

interface BackgroundOptions {
  /**
   * The CSS `background` property
   */
  bg?: CSS.Property.Color;
  /**
   * The CSS `background-clip` property
   */
  bgClip?: CSS.Property.BackgroundClip | 'text';
  /**
   * The CSS `background-color` property
   */
  bgColor?: CSS.Property.Color;
  /**
   * The CSS `background-image` property
   */
  bgImg?: CSS.Property.BackgroundImage;
  /**
   * The CSS `background-repeat` property
   */
  bgRepeat?: CSS.Property.BackgroundRepeat;
  /**
   * The CSS `background-position` property
   */
  bgPos?: CSS.Property.BackgroundPosition | number;
  /**
   * The CSS `background-size` property
   */
  bgSize?: CSS.Property.BackgroundSize | number;
  /**
   * The CSS `background-attachment` property
   */
  bgAttachment?: CSS.Property.BackgroundAttachment;
}

export default BackgroundOptions;
