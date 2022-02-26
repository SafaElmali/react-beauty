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
  ${({ maxWidth }) => setMaxWidth(maxWidth) || maxWidth};
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

const setMaxWidth = (maxWidth: any) => {
  switch (maxWidth) {
    case 'sm':
      return `max-width: 640px`;
    case 'md':
      return `max-width: 768px`;
    case 'lg':
      return `max-width: 1024px`;
    case 'xl':
      return `max-width: 1280px`;
  }
};
