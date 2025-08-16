export type BlockType = "Header" | "Main" | "Footer" | "Section";

export type PageBlock = {
  id: string;
  type: BlockType;
  props: {
    columns: number;
    rows: number;
    gap?: string;
    alignItems?: string;
    bg?: string;
    height?: string;
  };
  children?: PageBlock[];
};
