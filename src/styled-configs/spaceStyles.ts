import { css } from "styled-components";
import { SpaceOptions } from "../config/space";

export const spaceStyles = css<SpaceOptions>`
  margin: ${({ margin }) => margin};
  margin-block-start: ${({ marginBlockStart }) => marginBlockStart};
  margin-top: ${({ marginTop }) => marginTop};
  margin-inline-end: ${({ marginInlineEnd }) => marginInlineEnd};
  margin-right: ${({ marginRight }) => marginRight};
  margin-block-end: ${({ marginBlockEnd }) => marginBlockEnd};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-inline-start: ${({ marginInlineStart }) => marginInlineStart};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-inline: ${({ marginInline }) => marginInline};
  margin-block: ${({ marginBlock }) => marginBlock};
  padding: ${({ padding }) => padding};
  padding-block-start: ${({ paddingBlockStart }) => paddingBlockStart};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-inline-end: ${({ paddingInlineEnd }) => paddingInlineEnd};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-block-end: ${({ paddingBlockEnd }) => paddingBlockEnd};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-inline-start: ${({ paddingInlineStart }) => paddingInlineStart};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-inline: ${({ paddingInline }) => paddingInline};
  padding-block: ${({ paddingBlock }) => paddingBlock};
`;
