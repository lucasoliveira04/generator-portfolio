import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { PageBlock } from "../../models/page";

type Props = {
  page: PageBlock[];
  onAdd: (type: PageBlock["type"], parentId?: string) => void;
  onRemove: (id: string) => void;
  onUpdateProps: (id: string, newProps: Partial<PageBlock["props"]>) => void;
};

export const BarraDeConfiguracaoDoPrototipo = ({
  page,
  onAdd,
  onRemove,
  onUpdateProps,
}: Props) => {
  const [aberta, setAberta] = useState(true);

  const renderTree = (blocks: PageBlock[], level = 0) =>
    blocks.map((block) => (
      <div
        key={block.id}
        style={{ marginLeft: level * 12 }}
        className="mb-3 border-l pl-2"
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold">{block.type}</span>
          <div className="flex gap-1">
            {block.type === "Main" && (
              <button
                onClick={() => onAdd("Section", block.id)}
                className="text-xs bg-gray-200 px-1 rounded"
              >
                + Section
              </button>
            )}
            <button
              onClick={() => onRemove(block.id)}
              className="text-xs bg-red-200 px-1 rounded"
            >
              x
            </button>
          </div>
        </div>

        {/* Editor de colunas/linhas */}
        <div className="ml-2 mt-1 space-y-1 text-xs">
          <label>
            Colunas:
            <input
              type="number"
              value={block.props.columns}
              min={1}
              onChange={(e) =>
                onUpdateProps(block.id, {
                  columns: parseInt(e.target.value),
                })
              }
              className="border p-0.5 ml-1 w-12"
            />
          </label>
          <label>
            Linhas:
            <input
              type="number"
              value={block.props.rows}
              min={1}
              onChange={(e) =>
                onUpdateProps(block.id, {
                  rows: parseInt(e.target.value),
                })
              }
              className="border p-0.5 ml-1 w-12"
            />
          </label>
        </div>

        {block.children && renderTree(block.children, level + 1)}
      </div>
    ));

  return (
    <div
      className={`fixed top-0 left-0 h-screen border bg-white shadow-md transition-all duration-300 
      ${aberta ? "w-64" : "w-16"}`}
    >
      <button
        onClick={() => setAberta(!aberta)}
        className="absolute top-4 -right-4 bg-gray-200 border rounded-full p-1 shadow"
      >
        {aberta ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      <div className="p-4">
        {aberta && (
          <>
            <p className="font-semibold mb-2">Estrutura</p>
            {renderTree(page)}

            <div className="mt-4 space-y-2">
              <button
                onClick={() => onAdd("Header")}
                className="w-full bg-blue-500 text-white py-1 rounded"
              >
                + Header
              </button>
              <button
                onClick={() => onAdd("Main")}
                className="w-full bg-blue-500 text-white py-1 rounded"
              >
                + Main
              </button>
              <button
                onClick={() => onAdd("Footer")}
                className="w-full bg-blue-500 text-white py-1 rounded"
              >
                + Footer
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
