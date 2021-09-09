import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SomeProducts from "./components/SomeProducts";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Route path="/welcome" component={Welcome} />
        <Route path="/products">
          <SomeProducts />
        </Route>
        <Route path="/product-detail/:productId" component={ProductDetail} /> {/*dynamic path */}
      </main>
    </div>
  );
}

export default App;
