import ColorOptions from 'config/color';
import { css } from 'styled-components';

const colorStyles = css<ColorOptions>`
  color: ${({ color }) => color};
  fill: ${({ fill }) => fill};
  stroke: ${({ stroke }) => stroke};
`;

export default colorStyles;
