import { css } from "styled-components";
import LayoutOptions from "config/layout";

const layoutStyles = css<LayoutOptions>`
  display: ${({ display }) => display};
  width: ${({ width }) => width};
  inline-size: ${({ inlineSize }) => inlineSize};
  max-width: ${({ maxWidth }) => maxWidth};
  max-inline-size: ${({ maxInlineSize }) => maxInlineSize};
  min-width: ${({ minWidth }) => minWidth};
  min-inline-size: ${({ minInlineSize }) => minInlineSize};
  height: ${({ height }) => height};
  block-size: ${({ blockSize }) => blockSize};
  max-height: ${({ maxHeight }) => maxHeight};
  max-block-size: ${({ maxBlockSize }) => maxBlockSize};
  min-height: ${({ minHeight }) => minHeight};
  min-block-size: ${({ minBlockSize }) => minBlockSize};
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  box-sizing: ${({ boxSizing }) => boxSizing};
  box-decoration-break: ${({ boxDecorationBreak }) => boxDecorationBreak};
  float: ${({ float }) => float};
  object-fit: ${({ objectFit }) => objectFit};
  object-position: ${({ objectPosition }) => objectPosition};
  overscroll-behavior: ${({ overscrollBehavior }) => overscrollBehavior};
  overscroll-behavior-x: ${({ overscrollBehaviorX }) => overscrollBehaviorX};
  overscroll-behavior-y: ${({ overscrollBehaviorY }) => overscrollBehaviorY};
  visibility: ${({ visibility }) => visibility};
  isolation: ${({ isolation }) => isolation};
`;

export default layoutStyles;