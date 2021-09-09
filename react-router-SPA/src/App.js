import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SomeProducts from "./components/SomeProducts";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Route path="/welcome" component={Welcome} />
        <Route path="/products">
          <SomeProducts />
        </Route>
      </main>
    </div>
  );
}

export default App;
