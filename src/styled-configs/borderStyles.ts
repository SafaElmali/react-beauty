import { css } from "styled-components";
import { BorderOptions } from "../config/border";

export const borderStyles = css<BorderOptions>`
  border: ${({ border }) => border};
  border-width: ${({ borderWidth }) => borderWidth};
  border-style: ${({ borderStyle }) => borderStyle};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-top: ${({ borderTop }) => borderTop};
  border-block-start: ${({ borderBlockStart }) => borderBlockStart};
  border-top-width: ${({ borderTopWidth }) => borderTopWidth};
  border-block-start-width: ${({ borderBlockStartWidth }) => borderBlockStartWidth};
  border-bottom-width: ${({ borderBottomWidth }) => borderBottomWidth};
  border-block-end-width: ${({ borderBlockEndWidth }) => borderBlockEndWidth};
  border-left-width: ${({ borderLeftWidth }) => borderLeftWidth};
  border-inline-start-width: ${({ borderInlineStartWidth }) => borderInlineStartWidth};
  
`;
