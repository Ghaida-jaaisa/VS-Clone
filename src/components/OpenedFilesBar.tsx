import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";

interface IProps {}

const OpenedFilesBar = ({}: IProps) => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      {openedFiles.map((file) => (
        <OpenedFilesBarTab file={file} key={file.id} />
      ))}
    </div>
  );
};

export default OpenedFilesBar;
