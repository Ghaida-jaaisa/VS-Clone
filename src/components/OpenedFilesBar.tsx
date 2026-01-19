import { useSelector } from 'react-redux';
import OpenedFilesBarTab from './OpenedFilesBarTab';
import type { RootState } from '../app/store';

interface IProps {}

const OpenedFilesBar = ({}: IProps) => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div className="flex space-x-">
            {openedFiles.map((file, idx) => <OpenedFilesBarTab file={file} key={idx}/>)}
    </div>
  );
};

export default OpenedFilesBar;
