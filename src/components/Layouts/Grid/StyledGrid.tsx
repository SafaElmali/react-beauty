import GridOptions from 'config/grid';
import styled from 'styled-components';
import commonStyles from 'styled-configs/commonStyles';
import gridStyles from 'styled-configs/gridStyles';

const StyledGrid = styled.div<GridOptions>`
  ${gridStyles}
  ${commonStyles}
`;

export default StyledGrid;