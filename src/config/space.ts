import * as CSS from "csstype"

/**
 * Types for space related CSS properties
 */
export interface SpaceOptions {
  /**
   * Margin on top, left, bottom and right
   */
  margin?: CSS.Property.Margin | number;
  marginBlockStart?: CSS.Property.MarginBlockStart | number;
  /**
   * Margin on top
   */
  marginTop?: CSS.Property.MarginTop | number;
  /**
   * When direction is `ltr`, `marginInlineEnd` is equivalent to `marginRight`.
   * When direction is `rtl`, `marginInlineEnd` is equivalent to `marginLeft`.
   */
  marginInlineEnd?: CSS.Property.MarginInlineEnd | number;
  /**
   * When direction is `ltr`, `marginEnd` is equivalent to `marginRight`.
   * When direction is `rtl`, `marginEnd` is equivalent to `marginLeft`.
   */
  marginEnd?: CSS.Property.MarginInlineEnd | number;
  /**
   * Margin on right
   */
  marginRight?: CSS.Property.MarginRight | number;
  marginBlockEnd?: CSS.Property.MarginBlockEnd | number;
  /**
   * Margin on bottom
   */
  marginBottom?: CSS.Property.MarginBottom | number;
  /**
   * When direction is `ltr`, `marginInlineStart` is equivalent to `marginLeft`.
   * When direction is `rtl`, `marginInlineStart` is equivalent to `marginRight`.
   */
  marginInlineStart?: CSS.Property.MarginInlineStart | number;
  /**
   * When direction is `ltr`, `marginStart` is equivalent to `marginLeft`.
   * When direction is `rtl`, `marginStart` is equivalent to `marginRight`.
   */
  marginStart?: CSS.Property.MarginInlineStart | number;
  /**
   * Margin on left
   */
  marginLeft?: CSS.Property.MarginLeft | number;
  marginInline?: CSS.Property.MarginInline | number;
  /**
   * Margin on left and right
   */
  marginX?: CSS.Property.Margin | number;
  marginBlock?: CSS.Property.MarginBlock | number;
  /**
   * Margin on top and bottom
   */
  marginY?: CSS.Property.Margin | number;
  /**
   * Padding on top, left, bottom and right
   */
  padding?: CSS.Property.Padding | number;
  paddingBlockStart?: CSS.Property.PaddingBlockStart | number;
  /**
   * Padding on top
   */
  paddingTop?: CSS.Property.PaddingTop | number;
  /**
   * When direction is `ltr`, `paddingInlineEnd` is equivalent to `paddingRight`.
   * When direction is `rtl`, `paddingInlineEnd` is equivalent to `paddingLeft`.
   */
  paddingInlineEnd?: CSS.Property.PaddingInlineEnd | number;
  /**
   * When direction is `ltr`, `paddingEnd` is equivalent to `paddingRight`.
   * When direction is `rtl`, `paddingEnd` is equivalent to `paddingLeft`.
   */
  paddingEnd?: CSS.Property.PaddingInlineEnd | number;
  /**
   * Padding on right
   */
  paddingRight?: CSS.Property.PaddingRight | number;
  paddingBlockEnd?: CSS.Property.PaddingBlockEnd | number;
  /**
   * Padding on bottom
   */
  paddingBottom?: CSS.Property.PaddingBottom | number;
  /**
   * When direction is `ltr`, `paddingInlineStart` is equivalent to `paddingLeft`.
   * When direction is `rtl`, `paddingInlineStart` is equivalent to `paddingRight`.
   */
  paddingInlineStart?: CSS.Property.PaddingInlineStart | number;
  /**
   * When direction is `ltr`, `paddingStart` is equivalent to `paddingLeft`.
   * When direction is `rtl`, `paddingStart` is equivalent to `paddingRight`.
   */
  paddingStart?: CSS.Property.PaddingInlineStart | number;
  /**
   * Padding on left
   */
  paddingLeft?: CSS.Property.PaddingLeft | number;
  paddingInline?: CSS.Property.PaddingInline | number;
  /**
   * Padding on left and right
   */
  paddingX?: CSS.Property.Padding | number;
  paddingBlock?: CSS.Property.PaddingBlock | number;
  /**
   * Padding on top and bottom
   */
  paddingY?: CSS.Property.Padding | number;
}
