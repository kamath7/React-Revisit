import React, { useState } from "react";
import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  const toggleP = () => {
    setShowP(prevShowP => !prevShowP);
  };
  return (
    <div className="App">
      <h1>Hi Kams!</h1>
      <button onClick={toggleP}>Toggle  p</button>
      {showP && <p>Some lalle text</p>}
      {showP && <p> United title winners 2021-22 </p>}
    </div>
  );
}

export default App;
