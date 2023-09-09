import SourceText from "./components/SourceText";
import TargetText from "./components/TargetText";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <>
      <ToolBar />
      <div className="container grid lg:flex gap-2">
        <SourceText />
        <TargetText />
      </div>
    </>
  );
}

export default App;
