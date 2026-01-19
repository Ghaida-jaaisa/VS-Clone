import "./App.css";
import {fileTree} from "./data/fileTree";
import RecursiveComponent from "./components/RecursiveComponent";
import OpenedFilesBar from "./components/OpenedFilesBar";

function App() {
  return (
    <div className="flex">
      <div>
        <RecursiveComponent fileTree={fileTree} />
      </div>
      <div className="h-screen ml-10 flex">
        <OpenedFilesBar/>
      </div>
    </div>
  );
}
export default App;
