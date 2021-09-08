import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./cart-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    // totalAmount:0
  },
  reducers: {
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existing) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existing.quantity++;
        existing.totalPrice = +newItem.price;
      }
    },
    removeItemsFromCart(state, action) {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existing.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existing.quantity--;
        existing.totalPrice -= existing.price;
      }
    },
  },
});
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Loading...",
        title: "Loading Data...",
        message: "Talking with the server!",
      })
    );
    const sendReq = async () => {
      const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}`, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Error sending!");
      }
    };
    try {
      await sendReq();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Cart data failed to send",
        })
      );
    }
  };
};
export const cartActions = cartSlice.actions;
export default cartSlice;
