import BackgroundOptions from 'config/background';
import { css } from 'styled-components';

const backgroundStyles = css<BackgroundOptions>`
  background: ${({ bg }) => bg};
  background-attachment: ${({ bgAttachment }) => bgAttachment};
  background-clip: ${({ bgClip }) => bgClip};
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImg }) => bgImg};
  background-position: ${({ bgPos }) => bgPos};
  background-repeat: ${({ bgRepeat }) => bgRepeat};
  background-size: ${({ bgSize }) => bgSize};
`;

export default backgroundStyles;
