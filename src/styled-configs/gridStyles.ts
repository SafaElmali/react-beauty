import { css } from "styled-components";
import { GridOptions } from "../config/grid";

export const gridStyles = css<GridOptions>`
  display: grid;
  grid-gap: ${({ gridGap }) => gridGap};
  grid-column-gap: ${({ gridColumnGap }) => gridColumnGap};
  grid-row-gap: ${({ gridRowGap }) => gridRowGap};
  grid-column-start: ${({ gridColumnStart }) => gridColumnStart};
  grid-row-start: ${({ gridRowStart }) => gridRowStart};
  grid-row-end: ${({ gridRowEnd }) => gridRowEnd};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};
  grid-auto-columns: ${({ gridAutoColumns }) => gridAutoColumns};
  grid-auto-rows: ${({ gridAutoRows }) => gridAutoRows};
  grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow};
  grid-area: ${({ gridArea }) => gridArea};
  grid-row: ${({ gridRow }) => gridRow};
  grid-column: ${({ gridColumn }) => gridColumn};
`;
