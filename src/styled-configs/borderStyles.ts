import { css } from 'styled-components';
import BorderOptions from 'config/border';

const borderStyles = css<BorderOptions>`
  border: ${({ border }) => border};
  border-width: ${({ borderWidth }) => borderWidth};
  border-style: ${({ borderStyle }) => borderStyle};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-top: ${({ borderTop }) => borderTop};
  border-block-start: ${({ borderBlockStart }) => borderBlockStart};
  border-top-width: ${({ borderTopWidth }) => borderTopWidth};
  border-block-start-width: ${({ borderBlockStartWidth }) =>
    borderBlockStartWidth};
  border-bottom-width: ${({ borderBottomWidth }) => borderBottomWidth};
  border-block-end-width: ${({ borderBlockEndWidth }) => borderBlockEndWidth};
  border-left-width: ${({ borderLeftWidth }) => borderLeftWidth};
  border-inline-start-width: ${({ borderInlineStartWidth }) =>
    borderInlineStartWidth};
  border-right-width: ${({ borderRightWidth }) => borderRightWidth};
  border-inline-end-width: ${({ borderInlineEndWidth }) =>
    borderInlineEndWidth};
  border-top-style: ${({ borderTopStyle }) => borderTopStyle};
  border-block-start-style: ${({ borderBlockStartStyle }) =>
    borderBlockStartStyle};
  border-bottom-style: ${({ borderBottomStyle }) => borderBottomStyle};
  border-block-end-style: ${({ borderBlockEndStyle }) => borderBlockEndStyle};
  border-left-style: ${({ borderLeftStyle }) => borderLeftStyle};
  border-inline-start-style: ${({ borderInlineStartStyle }) =>
    borderInlineStartStyle};
  border-right-style: ${({ borderRightStyle }) => borderRightStyle};
  border-inline-end-style: ${({ borderInlineEndStyle }) =>
    borderInlineEndStyle};
  border-top-color: ${({ borderTopColor }) => borderTopColor};
  border-block-start-color: ${({ borderBlockStartColor }) =>
    borderBlockStartColor};
  border-bottom-color: ${({ borderBottomColor }) => borderBottomColor};
  border-block-end-color: ${({ borderBlockEndColor }) => borderBlockEndColor};
  border-left-color: ${({ borderLeftColor }) => borderLeftColor};
  border-inline-start-color: ${({ borderInlineStartColor }) =>
    borderInlineStartColor};
  border-right-color: ${({ borderRightColor }) => borderRightColor};
  border-inline-end-color: ${({ borderInlineEndColor }) =>
    borderInlineEndColor};
  border-right: ${({ borderRight }) => borderRight};
  border-inline-end: ${({ borderInlineEnd }) => borderInlineEnd};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-block-end: ${({ borderBlockEnd }) => borderBlockEnd};
  border-left: ${({ borderLeft }) => borderLeft};
  border-inline-start: ${({ borderInlineStart }) => borderInlineStart};
  border-top-left-radius: ${({ borderTopLeftRadius }) => borderTopLeftRadius};
  border-top-right-radius: ${({ borderTopRightRadius }) =>
    borderTopRightRadius};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius};
  border-block: ${({ borderBlock }) => borderBlock};
  border-inline: ${({ borderInline }) => borderInline};
`;

export default borderStyles;
