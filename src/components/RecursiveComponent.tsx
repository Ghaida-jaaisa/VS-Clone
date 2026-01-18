import { useState } from "react";
import type { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";
import FolderIcon from "./SVG/Folder";
import BottomArrowIcon from "./SVG/Bottom";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({
  fileTree: { name, isFolder, children, content },
}: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ** Handlers
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <FolderIcon />
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center mr-2">
            <FileIcon />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
