import { Route , Switch} from "react-router-dom";
import Welcome from "./components/Welcome";
import SomeProducts from "./components/SomeProducts";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/products" exact={true}>
          <SomeProducts />
        </Route>
        {/* <Route path="/products" exact={true}>
          <SomeProducts />
        </Route>  alternate to switch */}
        <Route path="/products/:productId" component={ProductDetail} />{" "}
        {/*dynamic path */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
