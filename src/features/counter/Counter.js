import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import "./style.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [addAmount, setAddAmount] = useState(0);
  const [subAmount, setSubAmount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>{count}</p>
      <button className="btn" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button className="btn" onClick={() => dispatch(reset())}>
        reset
      </button>

      <section className="input">
        <div>
          <h3>Increment By Amount</h3>
          <input
            className="omrs-input-underlined"
            value={addAmount}
            onChange={(e) => setAddAmount(e.target.value)}
          />
          <button
            className="btn1"
            onClick={() => dispatch(incrementByAmount(Number(addAmount)))}
          >
            Add amount
          </button>
        </div>

        <div>
          <h3>Decrement By Amount</h3>
          <input
            value={subAmount}
            onChange={(e) => setSubAmount(e.target.value)}
          />
          <button
            className="btn1"
            onClick={() => dispatch(decrementByAmount(Number(subAmount)))}
          >
            Sub amount
          </button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
