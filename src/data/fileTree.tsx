import type { IFile } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

const fileTree: IFile = {
  id: uuidv4(),
  name: "VS Code Clone ",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "index.html",
      isFolder: false,
    },
    {
      id: uuidv4(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "react.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};

export default fileTree;
