import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/cart-slice";
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.isVisible);
  const cart = useSelector((state) => state.cart);
  c;
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "Loading...",
          title: "Loading Data...",
          message: "Talking with the server!",
        })
      );
      const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}`, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Error sending!");
      }
      dispatch(
        uiActions.showNotification({
          status: "Success!",
          title: "Success!",
          message: "Cart data sent successfully!",
        })
      );
    };
    sendCartData().catch((err) => {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "Error!",
          message: "Cart data failed to send",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
