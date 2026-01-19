import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  filename: string;
  fileContent: string;
}

interface IInitialState{ 
    openedFiles : IFile[];
    clickedFile: IClickedFile;
    activeTabId: string | null
}


const initialState : IInitialState = {
  openedFiles: [],
  clickedFile: {
    filename: "",
    fileContent: "",
  },
  activeTabId: null
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFilesAction : (state, action: PayloadAction<IFile[]>) => {
        state.openedFiles = action.payload
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => { 
      state.clickedFile = action.payload
    },
    setActiceTabIdAction : (state, action: PayloadAction<string>) => { 
      state.activeTabId = action.payload
    }
  },
});

export const {setOpenedFilesAction, setClickedFileAction, setActiceTabIdAction} = fileTreeSlice.actions
export default fileTreeSlice.reducer;
