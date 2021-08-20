import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";

import Header from "./components/Header";
import Auth from "./components/Auth";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Auth />
      <Counter />
    </React.Fragment>
  );
}

export default App;
//<Counter/>
