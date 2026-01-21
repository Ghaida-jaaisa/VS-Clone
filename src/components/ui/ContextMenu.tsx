import { useRef, useEffect } from "react";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../../app/features/fileTreeSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ positions: { x, y }, setShowMenu }: IProps) => {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  const { openedFiles, tabIdToRemove } = useSelector(
    (state: RootState) => state.tree,
  );

  // ** Handlers
  const onCloseAll = () => {
    dispatch(setOpenedFilesAction([]));
    setShowMenu(false);
  };
  const onClose = () => {
    const filtered = openedFiles.filter((file) => file.id !== tabIdToRemove);
    const lastTab = filtered[filtered.length - 1];

    if (!lastTab) {
      dispatch(setOpenedFilesAction([]));
      dispatch(
        setClickedFileAction({
          activeTabId: null,
          fileContent: "",
          filename: "",
        }),
      );
      return;
    }
    const { id, name, content } = lastTab;
    dispatch(setOpenedFilesAction(filtered));
    dispatch(
      setClickedFileAction({
        activeTabId: id,
        fileContent: content,
        filename: name,
      }),
    );
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  return (
    <div ref={menuRef}>
      <ul
        className="z-10 w-32 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={onClose}
        >
          Close
        </li>
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={onCloseAll}
        >
          Close All
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
