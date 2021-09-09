import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SomeProducts from "./components/SomeProducts";
function App() {
  return (
    <div>
      <Route path="/welcome" component={Welcome} />
      <Route path="/products">
        <SomeProducts />
      </Route>
    </div>
  );
}

export default App;
