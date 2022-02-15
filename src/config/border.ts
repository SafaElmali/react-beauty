import * as CSS from 'csstype';

/**
 * The prop types for border properties listed above
 */
interface BorderOptions {
  /**
   * The CSS `border` property
   */
  border?: CSS.Property.Border | number;
  /**
   * The CSS `border-width` property
   */
  borderWidth?: CSS.Property.BorderWidth | number;
  /**
   * The CSS `border-style` property
   */
  borderStyle?: CSS.Property.BorderStyle;
  /**
   * The CSS `border-color` property
   */
  borderColor?: CSS.Property.BorderTopColor;
  /**
   * The CSS `border-radius` property
   */
  borderRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-top` property
   */
  borderTop?: CSS.Property.BorderTop | number;
  borderBlockStart?: CSS.Property.BorderBlockStart | number;
  /**
   * The CSS `border-top-width` property
   */
  borderTopWidth?: CSS.Property.BorderWidth | number;
  borderBlockStartWidth?: CSS.Property.BorderBlockStartWidth | number;
  /**
   * The CSS `border-bottom-width` property
   */
  borderBottomWidth?: CSS.Property.BorderWidth | number;
  borderBlockEndWidth?: CSS.Property.BorderBlockEndWidth | number;
  /**
   * The CSS `border-left-width` property
   */
  borderLeftWidth?: CSS.Property.BorderWidth | number;
  borderInlineStartWidth?: CSS.Property.BorderInlineStartWidth | number;
  /**
   * The CSS `border-right-width` property
   */
  borderRightWidth?: CSS.Property.BorderWidth | number;
  borderInlineEndWidth?: CSS.Property.BorderInlineEndWidth | number;
  /**
   * The CSS `border-top-style` property
   */
  borderTopStyle?: CSS.Property.BorderTopStyle;
  borderBlockStartStyle?: CSS.Property.BorderBlockStartStyle;
  /**
   * The CSS `border-bottom-style` property
   */
  borderBottomStyle?: CSS.Property.BorderBottomStyle;
  borderBlockEndStyle?: CSS.Property.BorderBlockEndStyle;
  /**
   * The CSS `border-left-style` property
   */
  borderLeftStyle?: CSS.Property.BorderLeftStyle;
  borderInlineStartStyle?: CSS.Property.BorderInlineStartStyle;
  /**
   * The CSS `border-right-styles` property
   */
  borderRightStyle?: CSS.Property.BorderRightStyle;
  borderInlineEndStyle?: CSS.Property.BorderInlineEndStyle;
  /**
   * The CSS `border-top-color` property
   */
  borderTopColor?: CSS.Property.BorderTopColor;
  borderBlockStartColor?: CSS.Property.BorderBlockStartColor;
  /**
   * The CSS `border-bottom-color` property
   */
  borderBottomColor?: CSS.Property.BorderBottomColor;
  borderBlockEndColor?: CSS.Property.BorderBlockEndColor;
  /**
   * The CSS `border-left-color` property
   */
  borderLeftColor?: CSS.Property.BorderLeftColor;
  borderInlineStartColor?: CSS.Property.BorderInlineStartColor;
  /**
   * The CSS `border-right-color` property
   */
  borderRightColor?: CSS.Property.BorderRightColor;
  borderInlineEndColor?: CSS.Property.BorderInlineEndColor;
  /**
   * The CSS `border-right` property
   */
  borderRight?: CSS.Property.BorderRight | number;
  borderInlineEnd?: CSS.Property.BorderInlineEnd | number;
  /**
   * The CSS `border-bottom` property
   */
  borderBottom?: CSS.Property.BorderBottom | number;

  borderBlockEnd?: CSS.Property.BorderBlockEnd | number;
  /**
   * The CSS `border-left` property
   */
  borderLeft?: CSS.Property.BorderLeft | number;
  borderInlineStart?: CSS.Property.BorderInlineStart | number;
  /**
   * The CSS `border-top-radius` property
   */
  borderTopLeftRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-top-right-radius` property
   */
  borderTopRightRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-bottom-left-radius` property
   */
  borderBottomLeftRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-bottom-right-radius` property
   */
  borderBottomRightRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-right` and `border-left` property
   */
  borderInline?: CSS.Property.BorderInline | number;
  borderBlock?: CSS.Property.BorderBlock | number;
}

export default BorderOptions;
