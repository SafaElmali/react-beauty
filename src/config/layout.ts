import * as CSS from 'csstype';

import BackgroundOptions from './background';
import BorderOptions from './border';
import ColorOptions from './color';
import SpaceOptions from './space';

/**
 * Types for layout related CSS properties
 */
interface LayoutOptions
  extends BorderOptions,
    SpaceOptions,
    ColorOptions,
    BackgroundOptions {
  /**
   * The CSS `display` property
   */
  display?: CSS.Property.Display;
  /**
   * The CSS `width` property
   */
  width?: CSS.Property.Width | number;
  inlineSize?: CSS.Property.InlineSize | number;
  /**
   * The CSS `max-width` property
   */
  maxWidth?: CSS.Property.MaxWidth | number | 'sm' | 'md' | 'lg' | 'xl';
  maxInlineSize?: CSS.Property.MaxInlineSize | number;
  /**
   * The CSS `min-width` property
   */
  minWidth?: CSS.Property.MinWidth | number;
  minInlineSize?: CSS.Property.MinInlineSize | number;
  /**
   * The CSS `height` property
   */
  height?: CSS.Property.Height | number;
  blockSize?: CSS.Property.BlockSize | number;
  /**
   * The CSS `max-height` property
   */
  maxHeight?: CSS.Property.MaxHeight | number;
  maxBlockSize?: CSS.Property.MaxBlockSize | number;
  /**
   * The CSS `min-height` property
   */
  minHeight?: CSS.Property.MinHeight | number;
  minBlockSize?: CSS.Property.MinBlockSize | number;
  /**
   * The CSS `vertical-align` property
   */
  verticalAlign?: CSS.Property.VerticalAlign;
  /**
   * The CSS `overflow` property
   */
  overflow?: CSS.Property.Overflow;
  /**
   * The CSS `overflow-x` property
   */
  overflowX?: CSS.Property.OverflowX;
  /**
   * The CSS `overflow-y` property
   */
  overflowY?: CSS.Property.OverflowY;
  /**
   * The CSS `box-sizing` property
   */
  boxSizing?: CSS.Property.BoxSizing;
  /**
   * The CSS `box-decoration` property
   */
  boxDecorationBreak?: CSS.Property.BoxDecorationBreak;
  /**
   * The CSS `float` property
   */
  float?: CSS.Property.Float;
  /**
   * The CSS `object-fit` property
   */
  objectFit?: CSS.Property.ObjectFit;
  /**
   * The CSS `object-position` property
   */
  objectPosition?: CSS.Property.ObjectPosition;
  /**
   * The CSS `overscroll-behavior` property
   */
  overscrollBehavior?: CSS.Property.OverscrollBehavior;
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollBehaviorX?: CSS.Property.OverscrollBehaviorX;
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollX?: CSS.Property.OverscrollBehaviorX;
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollBehaviorY?: CSS.Property.OverscrollBehaviorY;
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollY?: CSS.Property.OverscrollBehaviorY;
  /**
   * The CSS `visibility` property
   */
  visibility?: CSS.Property.Visibility;
  /**
   * The CSS `isolation` property
   */
  isolation?: CSS.Property.Isolation;
}

export default LayoutOptions;
