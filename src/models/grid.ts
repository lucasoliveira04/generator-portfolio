export class Grid {
  private column: string;
  private row: string;
  private data: unknown;

  constructor(column: string, row: string, data: unknown) {
    this.column = column;
    this.row = row;
    this.data = data;
  }
}
