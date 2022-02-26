import LayoutOptions from 'config/layout';
import styled from 'styled-components';
import commonStyles from 'styled-configs/commonStyles';

const StyledContainer = styled.div<LayoutOptions>`
  -webkit-margin-end: auto;
  -webkit-margin-start: auto;
  -webkit-padding-end: 1rem;
  -webkit-padding-start: 1rem;
  margin-inline-end: auto;
  margin-inline-start: auto;
  padding-inline-end: 1rem;
  padding-inline-start: 1rem;
  ${commonStyles};
`;

export default StyledContainer;
