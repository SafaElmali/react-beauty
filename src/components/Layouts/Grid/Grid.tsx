import GridOptions from 'config/grid';
import StyledGrid from './StyledGrid';

export interface GridProps extends GridOptions {
  children: React.ReactNode;
}

const Grid = (props: GridProps) => {
  const { children } = props;

  return <StyledGrid {...props}>{children}</StyledGrid>;
};

export interface GridProps {
  /**
   * Short hand prop for `gridTemplateColumns`
   * @type SystemProps["gridTemplateColumns"]
   */
  templateColumns?: GridOptions['gridTemplateColumns'];
  /**
   * Short hand prop for `gridGap`
   * @type GridOptions["gridGap"]
   */
  gap?: GridOptions['gridGap'];
  /**
   * Short hand prop for `gridRowGap`
   * @type GridOptions["gridRowGap"]
   */
  rowGap?: GridOptions['gridRowGap'];
  /**
   * Short hand prop for `gridColumnGap`
   * @type GridOptions["gridColumnGap"]
   */
  columnGap?: GridOptions['gridColumnGap'];
  /**
   * Short hand prop for `gridAutoFlow`
   * @type GridOptions["gridAutoFlow"]
   */
  autoFlow?: GridOptions['gridAutoFlow'];
  /**
   * Short hand prop for `gridAutoRows`
   * @type GridOptions["gridAutoRows"]
   */
  autoRows?: GridOptions['gridAutoRows'];
  /**
   * Short hand prop for `gridAutoColumns`
   * @type GridOptions["gridAutoColumns"]
   */
  autoColumns?: GridOptions['gridAutoColumns'];
  /**
   * Short hand prop for `gridTemplateRows`
   * @type GridOptions["gridTemplateRows"]
   */
  templateRows?: GridOptions['gridTemplateRows'];
  /**
   * Short hand prop for `gridTemplateAreas`
   * @type GridOptions["gridTemplateAreas"]
   */
  templateAreas?: GridOptions['gridTemplateAreas'];
  /**
   * Short hand prop for `gridArea`
   * @type GridOptions["gridArea"]
   */
  area?: GridOptions['gridArea'];
  /**
   * Short hand prop for `gridColumn`
   * @type GridOptions["gridColumn"]
   */
  column?: GridOptions['gridColumn'];
  /**
   * Short hand prop for `gridRow`
   * @type GridOptions["gridRow"]
   */
  row?: GridOptions['gridRow'];
}

export default Grid;
