import { css } from "styled-components";
import ColorOptions from "config/color";

const colorStyles = css<ColorOptions>`
  color: ${({ color }) => color};
  fill: ${({ fill }) => fill};
  stroke: ${({ stroke }) => stroke};
`;

export default colorStyles;
