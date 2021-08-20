import { createStore, combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };
createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // can mutate state here. internally transferred to be immutable
      state.counter++;
    },
    decrement() {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter() {
      state.showCounter = !state.showCounter;
    },
  },
});
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "increase":
      return {
        counter: state.counter + action.payload,
        showCounter: state.showCounter,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "toggle":
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;
