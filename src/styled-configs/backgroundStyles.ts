import { css } from 'styled-components';
import BackgroundOptions from 'config/background';

const backgroundStyles = css<BackgroundOptions>`
  background: ${({ bg }) => bg};
  background-clip: ${({ bgClip }) => bgClip};
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImg }) => bgImg};
  background-repeat: ${({ bgRepeat }) => bgRepeat};
  background-position: ${({ bgPos }) => bgPos};
  background-size: ${({ bgSize }) => bgSize};
  background-attachment: ${({ bgAttachment }) => bgAttachment};
`;

export default backgroundStyles;
