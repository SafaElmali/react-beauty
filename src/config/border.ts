import * as CSS from "csstype";

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
   * The CSS `border-radius` property
   */
  rounded?: CSS.Property.BorderRadius | number;
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
  borderStartWidth?: CSS.Property.BorderWidth | number;
  borderInlineStartWidth?: CSS.Property.BorderInlineStartWidth | number;
  /**
   * The CSS `border-right-width` property
   */
  borderRightWidth?: CSS.Property.BorderWidth | number;
  borderEndWidth?: CSS.Property.BorderWidth | number;
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
  borderStartStyle?: CSS.Property.BorderInlineStartStyle;
  borderInlineStartStyle?: CSS.Property.BorderInlineStartStyle;
  /**
   * The CSS `border-right-styles` property
   */
  borderRightStyle?: CSS.Property.BorderRightStyle;
  borderEndStyle?: CSS.Property.BorderInlineEndStyle;
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
  borderStartColor?: CSS.Property.BorderInlineStartColor;
  borderInlineStartColor?: CSS.Property.BorderInlineStartColor;
  /**
   * The CSS `border-right-color` property
   */
  borderRightColor?: CSS.Property.BorderRightColor;
  borderEndColor?: CSS.Property.BorderInlineEndColor;
  borderInlineEndColor?: CSS.Property.BorderInlineEndColor;
  /**
   * The CSS `border-right` property
   */
  borderRight?: CSS.Property.BorderRight | number;

  borderEnd?: CSS.Property.BorderInlineStart | number;
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
  borderStart?: CSS.Property.BorderInlineStart | number;
  borderInlineStart?: CSS.Property.BorderInlineStart | number;
  /**
   * The CSS `border-top-radius` property
   */
  borderTopRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-top-radius` property
   */
  roundedTop?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-right-radius` property
   */
  borderRightRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-right-radius` property
   */
  roundedRight?: CSS.Property.BorderRadius | number;
  /**
   * When direction is `ltr`, `roundedEnd` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `roundedEnd` is equivalent to `borderLeftRadius`.
   */
  roundedEnd?: CSS.Property.BorderRadius | number;
  /**
   * When direction is `ltr`, `borderInlineEndRadius` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `borderInlineEndRadius` is equivalent to `borderLeftRadius`.
   */
  borderInlineEndRadius?: CSS.Property.BorderRadius | number;
  /**
   * When direction is `ltr`, `borderEndRadius` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `borderEndRadius` is equivalent to `borderLeftRadius`.
   */
  borderEndRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-bottom-radius` property
   */
  borderBottomRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-bottom-radius` property
   */
  roundedBottom?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-left-radius` property
   */
  borderLeftRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-left-radius` property
   */
  roundedLeft?: CSS.Property.BorderRadius | number;
  /**
   * When direction is `ltr`, `roundedEnd` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `roundedEnd` is equivalent to `borderLeftRadius`.
   */
  roundedStart?: CSS.Property.BorderRadius | number;
  /**
   * When direction is `ltr`, `borderInlineStartRadius` is equivalent to `borderLeftRadius`.
   * When direction is `rtl`, `borderInlineStartRadius` is equivalent to `borderRightRadius`.
   */
  borderInlineStartRadius?: CSS.Property.BorderRadius | number;
  /**
   * When direction is `ltr`, `borderStartRadius` is equivalent to `borderLeftRadius`.
   * When direction is `rtl`, `borderStartRadius` is equivalent to `borderRightRadius`.
   */
  borderStartRadius?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-top-left-radius` property
   */
  borderTopLeftRadius?: CSS.Property.BorderRadius | number;
  borderTopStartRadius?: CSS.Property.BorderRadius | number;
  borderStartStartRadius?: CSS.Property.BorderStartStartRadius | number;
  /**
   * The CSS `border-top-left-radius` property
   */
  roundedTopLeft?: CSS.Property.BorderRadius | number;
  roundedTopStart?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-top-right-radius` property
   */
  borderTopRightRadius?: CSS.Property.BorderRadius | number;
  borderTopEndRadius?: CSS.Property.BorderRadius | number;
  borderStartEndRadius?: CSS.Property.BorderStartEndRadius | number;
  /**
   * The CSS `border-top-right-radius` property
   */
  roundedTopRight?: CSS.Property.BorderRadius | number;
  roundedTopEnd?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-bottom-left-radius` property
   */
  borderBottomLeftRadius?: CSS.Property.BorderRadius | number;
  borderBottomStartRadius?: CSS.Property.BorderRadius | number;
  borderEndStartRadius?: CSS.Property.BorderEndStartRadius | number;
  /**
   * The CSS `border-bottom-left-radius` property
   */
  roundedBottomLeft?: CSS.Property.BorderRadius | number;
  roundedBottomStart?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-bottom-right-radius` property
   */
  borderBottomRightRadius?: CSS.Property.BorderRadius | number;
  borderBottomEndRadius?: CSS.Property.BorderRadius | number;
  borderEndEndRadius?: CSS.Property.BorderEndEndRadius | number;
  /**
   * The CSS `border-bottom-right-radius` property
   */
  roundedBottomRight?: CSS.Property.BorderRadius | number;
  roundedBottomEnd?: CSS.Property.BorderRadius | number;
  /**
   * The CSS `border-right` and `border-left` property
   */
  borderX?: CSS.Property.Border | number;
  borderInline?: CSS.Property.BorderInline | number;
  /**
   * The CSS `border-top` and `border-bottom` property
   */
  borderY?: CSS.Property.Border | number;
  borderBlock?: CSS.Property.BorderBlock | number;
}

export default BorderOptions;
