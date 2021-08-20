import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {counterAction} from '../store/counter'
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state)=> state.counter.showCounter)
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const increaseHanlder = () => {
    dispatch(counterAction.increase(10));
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHanlder}>Increment by 5</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
