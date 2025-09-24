export class Grid {
  column: string;
  row: string;
  data: unknown;

  constructor(column: string, row: string, data: unknown) {
    this.column = column;
    this.row = row;
    this.data = data;
  }
}
