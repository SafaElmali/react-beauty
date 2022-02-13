import { css } from "styled-components";
import BackgroundOptions from "config/background";

const backgroundStyles = css<BackgroundOptions>`
  background: ${({ bg }) => bg};
  background-clip: ${({ bgClip }) => bgClip};
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImage }) => bgImage};
  background-position: ${({ bgPos }) => bgPos};
  background-repeat: ${({ bgRepeat }) => bgRepeat};
  background-size: ${({ backgroundSize }) => backgroundSize};
`;

export default backgroundStyles;
