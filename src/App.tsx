import "./App.css";
import {fileTree} from "./data/fileTree";
import ResizablePanel from "./components/ResizablePanel";
import RecursiveComponent from "./components/RecursiveComponent";
import OpenedFilesBar from "./components/OpenedFilesBar";

function App() {
  return (
    <div className="flex h-screen">
      <ResizablePanel 
      showLeftPanel={true}
      leftPanel = {
        <div className="w-64 ">
          <RecursiveComponent fileTree={fileTree} />
        </div>
      }

      rightPanel = {
        <OpenedFilesBar />
      }
      />
    </div>
  );
}
export default App;
