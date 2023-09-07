import { useState } from "react";
import useLanguages from "./hooks/useLanguages";

function App() {

  // const { languages } = useLanguages();

  return (
    <>
      <div>{JSON.stringify(languages)}</div>
    </>
  );
}

export default App;
