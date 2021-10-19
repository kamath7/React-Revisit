import React from "react";

import Todos from "./components/Todos";
const items: string[] = ["Eat food", "Sleep", "Take a dump"];
function App() {
  return (
    <div>
      <Todos items={items} />
    </div>
  );
}

export default App;
