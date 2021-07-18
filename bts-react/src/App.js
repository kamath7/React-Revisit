import React, { useCallback, useState } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleP = useCallback(() => {
    if (allowToggle) {
      setShowP((prevShowP) => !prevShowP);
    }
  }, [allowToggle]);
  const allowTogglep = () => {
    setAllowToggle(true);
  };
  return (
    <div className="App">
      <h1>Hi Kams!</h1>
      <button onClick={allowToggle}>Allow Toggle p</button>

      <button onClick={toggleP}>Toggle p</button>
      <DemoOutput show={showP} />
      {showP && <p> United title winners 2021-22 </p>}
    </div>
  );
}

export default App;
