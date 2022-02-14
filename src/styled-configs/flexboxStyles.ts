import { css } from 'styled-components';
import FlexboxOptions from 'config/flexbox';

const flexboxStyles = css<FlexboxOptions>`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-flow: ${({ flexFlow }) => flexFlow};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-items: ${({ justifyItems }) => justifyItems};
  justify-self: ${({ justifySelf }) => justifySelf};
  order: ${({ order }) => order};
  place-content: ${({ placeContent }) => placeContent};
  place-items: ${({ placeItems }) => placeItems};
  place-self: ${({ placeSelf }) => placeSelf};
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
  flex: ${({ flex }) => flex};
`;

export default flexboxStyles;
