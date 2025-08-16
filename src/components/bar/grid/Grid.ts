abstract class Grid {
  private columns: number;
  private rows: number;
  private width: string;
  private height: string;
  private gap: string;
  private alignItems: string;

  constructor(
    columns: number,
    rows: number,
    width: string,
    height: string,
    gap: string,
    alignItems: string
  ) {
    this.columns = columns;
    this.rows = rows;
    this.width = width;
    this.height = height;
    this.gap = gap;
    this.alignItems = alignItems;
  }
}

export default Grid;
