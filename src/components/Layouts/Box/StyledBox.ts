import LayoutOptions from 'config/layout';
import styled from 'styled-components';
import commonStyles from 'styled-configs/commonStyles';

const StyledBox = styled.div<LayoutOptions>`
  ${commonStyles};
`;

export default StyledBox;
