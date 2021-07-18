import React, { useCallback, useState } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
function App() {
  const [showP, setShowP] = useState(false);
  const toggleP = useCallback(() => {
    setShowP((prevShowP) => !prevShowP);
  },[]);
  return (
    <div className="App">
      <h1>Hi Kams!</h1>
      <button onClick={toggleP}>Toggle p</button>
      <DemoOutput show={showP} />
      {showP && <p> United title winners 2021-22 </p>}
    </div>
  );
}

export default App;
