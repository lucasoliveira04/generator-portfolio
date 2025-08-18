import { useState } from "react";
import { BlockBase } from "../../core/BlockBase";
import type { TextBlockImageProps } from "../../../types/textBlockProps";

export const TextBlockImage = ({
  src,
  alt = "Imagem",
  ...rest
}: TextBlockImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageSrc(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <BlockBase {...rest}>
      {({ isEditing }) =>
        isEditing ? (
          <div className="flex flex-col items-center space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="text-sm"
            />
            {imageSrc && (
              <img
                src={imageSrc}
                alt={alt}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                }}
              />
            )}
          </div>
        ) : (
          <img src={imageSrc} alt={alt} className="max-w-full h-auto rounded" />
        )
      }
    </BlockBase>
  );
};
