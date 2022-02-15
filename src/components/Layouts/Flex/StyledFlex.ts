import FlexboxOptions from 'config/flexbox';
import styled from 'styled-components';
import commonStyles from 'styled-configs/commonStyles';
import flexboxStyles from 'styled-configs/flexboxStyles';

const StyledFlex = styled.div<FlexboxOptions>`
  ${flexboxStyles}
  ${commonStyles}
`;

export default StyledFlex;
