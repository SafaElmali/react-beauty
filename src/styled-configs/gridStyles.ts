import GridOptions from 'config/grid';
import { css } from 'styled-components';

const gridStyles = css<GridOptions>`
  display: grid;
  grid-area: ${({ gridArea }) => gridArea};
  grid-auto-columns: ${({ gridAutoColumns }) => gridAutoColumns};
  grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow};
  grid-auto-rows: ${({ gridAutoRows }) => gridAutoRows};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-column-end: ${({ gridColumnEnd }) => gridColumnEnd};
  grid-column-gap: ${({ gridColumnGap }) => gridColumnGap};
  grid-column-start: ${({ gridColumnStart }) => gridColumnStart};
  grid-gap: ${({ gridGap }) => gridGap};
  grid-row: ${({ gridRow }) => gridRow};
  grid-row-end: ${({ gridRowEnd }) => gridRowEnd};
  grid-row-gap: ${({ gridRowGap }) => gridRowGap};
  grid-row-start: ${({ gridRowStart }) => gridRowStart};
  grid-template: ${({ gridTemplate }) => gridTemplate};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
`;

export default gridStyles;
