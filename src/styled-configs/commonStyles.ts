import { css } from 'styled-components';
import backgroundStyles from 'styled-configs/backgroundStyles';
import borderStyles from 'styled-configs/borderStyles';
import colorStyles from 'styled-configs/colorStyles';
import layoutStyles from 'styled-configs/layoutStyles';
import spaceStyles from 'styled-configs/spaceStyles';

const commonStyles = css`
  ${colorStyles}
  ${backgroundStyles}
  ${borderStyles};
  ${layoutStyles};
  ${spaceStyles};
`;

export default commonStyles;
