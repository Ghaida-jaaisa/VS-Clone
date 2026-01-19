import type { IFile } from "../interfaces";

interface IProps {
  file: IFile;
}
const OpenedFilesBarTab = ({file}: IProps) => {
  return <div>{file.name}</div>;
};

export default OpenedFilesBarTab;
