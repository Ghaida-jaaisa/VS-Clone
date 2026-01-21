import "./App.css";
import { fileTree } from "./data/fileTree";
import ResizablePanel from "./components/ResizablePanel";
import RecursiveComponent from "./components/RecursiveComponent";
import Preview from "./components/Preview";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";
import DropMenu from "./components/ui/ContextMenu";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div className="flex h-screen">
      <ResizablePanel
        showLeftPanel={true}
        leftPanel={
          <div className="w-64 ">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
        rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />}
      />
    </div>
  );
}
export default App;
