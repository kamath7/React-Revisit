import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
function App() {
  const showCart = useSelector((state) => state.ui.isVisible);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_FIREBASE_URL}`,
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
