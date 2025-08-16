import { useState } from "react";
import { BarraDeConfiguracaoDoPrototipo } from "../../components/bar/barraLateralConfig";
import type { PageBlock } from "../../models/page";

export const HomePageUser = () => {
  const [page, setPage] = useState<PageBlock[]>([]);

  const handleAdd = (type: PageBlock["type"], parentId?: string) => {
    const newBlock: PageBlock = {
      id: crypto.randomUUID(),
      type,
      props: {
        columns: 1,
        rows: 1,
        gap: "8px",
        alignItems: "center",
        bg: "#f9f9f9",
        height: "80px",
      },
      children: [],
    };

    if (!parentId) {
      setPage((prev) => [...prev, newBlock]);
    } else {
      const addChild = (blocks: PageBlock[]): PageBlock[] =>
        blocks.map((b) =>
          b.id === parentId
            ? { ...b, children: [...(b.children || []), newBlock] }
            : { ...b, children: b.children ? addChild(b.children) : [] }
        );
      setPage((prev) => addChild(prev));
    }
  };

  const handleRemove = (id: string) => {
    const removeBlock = (blocks: PageBlock[]): PageBlock[] =>
      blocks
        .filter((b) => b.id !== id)
        .map((b) => ({
          ...b,
          children: b.children ? removeBlock(b.children) : [],
        }));
    setPage((prev) => removeBlock(prev));
  };

  const handleUpdateProps = (
    id: string,
    newProps: Partial<PageBlock["props"]>
  ) => {
    const updateBlock = (blocks: PageBlock[]): PageBlock[] =>
      blocks.map((b) =>
        b.id === id
          ? { ...b, props: { ...b.props, ...newProps } }
          : { ...b, children: b.children ? updateBlock(b.children) : [] }
      );
    setPage((prev) => updateBlock(prev));
  };

  const renderBlock = (block: PageBlock) => {
    const styles: React.CSSProperties = {
      display: "grid",
      gridTemplateColumns: `repeat(${block.props.columns}, 1fr)`,
      gridTemplateRows: `repeat(${block.props.rows}, minmax(40px, auto))`,
      gap: block.props.gap,
      alignItems: block.props.alignItems as any,
      background: block.props.bg,
      minHeight: block.props.height,
      border: "1px dashed gray",
      margin: "8px 0",
      padding: "8px",
    };

    const cells = [];

    for (let r = 0; r < block.props.rows; r++) {
      for (let c = 0; c < block.props.columns; c++) {
        cells.push(
          <div
            key={`${r}-${c}`}
            className="flex items-center justify-center border border-gray-300"
          >
            <p className="text-xs">{c + 1}</p>
          </div>
        );
      }
    }

    return (
      <div key={block.id} style={styles}>
        <strong>{block.type}</strong>
        {block.children && block.children.map(renderBlock)}
      </div>
    );
  };

  return (
    <div className="ml-64 p-4 ">
      <BarraDeConfiguracaoDoPrototipo
        page={page}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onUpdateProps={handleUpdateProps}
      />

      <div className="mt-8">
        <div className="mt-4">{page.map(renderBlock)}</div>
      </div>
    </div>
  );
};
