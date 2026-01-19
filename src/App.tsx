import "./App.css";
import fileTree from "./data/fileTree";
import RecursiveComponent from "./components/RecursiveComponent";

function App() {

  return (
    <div className="my-5">
      <RecursiveComponent fileTree={fileTree} />
    </div>
  );
}
export default App;
