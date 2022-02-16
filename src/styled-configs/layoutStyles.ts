import LayoutOptions from 'config/layout';
import { css } from 'styled-components';

const layoutStyles = css<LayoutOptions>`
  block-size: ${({ blockSize }) => blockSize};
  box-decoration-break: ${({ boxDecorationBreak }) => boxDecorationBreak};
  box-sizing: ${({ boxSizing }) => boxSizing};
  display: ${({ display }) => display};
  float: ${({ float }) => float};
  height: ${({ height }) => height};
  inline-size: ${({ inlineSize }) => inlineSize};
  isolation: ${({ isolation }) => isolation};
  max-block-size: ${({ maxBlockSize }) => maxBlockSize};
  max-height: ${({ maxHeight }) => maxHeight};
  max-inline-size: ${({ maxInlineSize }) => maxInlineSize};
  max-width: ${({ maxWidth }) => maxWidth};
  min-block-size: ${({ minBlockSize }) => minBlockSize};
  min-height: ${({ minHeight }) => minHeight};
  min-inline-size: ${({ minInlineSize }) => minInlineSize};
  min-width: ${({ minWidth }) => minWidth};
  object-fit: ${({ objectFit }) => objectFit};
  object-position: ${({ objectPosition }) => objectPosition};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  overscroll-behavior: ${({ overscrollBehavior }) => overscrollBehavior};
  overscroll-behavior-x: ${({ overscrollBehaviorX }) => overscrollBehaviorX};
  overscroll-behavior-y: ${({ overscrollBehaviorY }) => overscrollBehaviorY};
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  visibility: ${({ visibility }) => visibility};
  width: ${({ width }) => width};
`;

export default layoutStyles;
