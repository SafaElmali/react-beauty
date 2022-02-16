import SpaceOptions from 'config/space';
import { css } from 'styled-components';

const spaceStyles = css<SpaceOptions>`
  margin: ${({ margin }) => margin};
  margin-block: ${({ marginBlock }) => marginBlock};
  margin-block-end: ${({ marginBlockEnd }) => marginBlockEnd};
  margin-block-start: ${({ marginBlockStart }) => marginBlockStart};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-inline: ${({ marginInline }) => marginInline};
  margin-inline-end: ${({ marginInlineEnd }) => marginInlineEnd};
  margin-inline-start: ${({ marginInlineStart }) => marginInlineStart};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ padding }) => padding};
  padding-block: ${({ paddingBlock }) => paddingBlock};
  padding-block-end: ${({ paddingBlockEnd }) => paddingBlockEnd};
  padding-block-start: ${({ paddingBlockStart }) => paddingBlockStart};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-inline: ${({ paddingInline }) => paddingInline};
  padding-inline-end: ${({ paddingInlineEnd }) => paddingInlineEnd};
  padding-inline-start: ${({ paddingInlineStart }) => paddingInlineStart};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-top: ${({ paddingTop }) => paddingTop};
`;

export default spaceStyles;
