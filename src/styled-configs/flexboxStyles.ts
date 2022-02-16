import FlexboxOptions from 'config/flexbox';
import { css } from 'styled-components';

const flexboxStyles = css<FlexboxOptions>`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  column-gap: ${({ columnGap }) => columnGap};
  display: flex;
  flex: ${({ flex }) => flex};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-flow: ${({ flexFlow }) => flexFlow};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-items: ${({ justifyItems }) => justifyItems};
  justify-self: ${({ justifySelf }) => justifySelf};
  order: ${({ order }) => order};
  place-content: ${({ placeContent }) => placeContent};
  place-items: ${({ placeItems }) => placeItems};
  place-self: ${({ placeSelf }) => placeSelf};
  row-gap: ${({ rowGap }) => rowGap};
`;

export default flexboxStyles;
