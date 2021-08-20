import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from './auth'


// const store = configureStore({
//   reducer: counterSlice.reducer, //global reducer here would counterSlice.reducer. alternatively use {} and setup reducers with keys and reducers
// });
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
export default store;
//Counter reducer before (redundant)
/* 
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


*/
