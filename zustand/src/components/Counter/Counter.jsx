import React from "react";
import { create } from "zustand";
import Controls from "./Controls";

export const useCounterStore = create((set) => ({
  count: 0,
  qtyInc: 0,
  qtyDec: 0,
  increaseCountByOne: () =>
    set((state) => {
      return { count: state.count + 1 };
    }),
  decreaseCountByOne: () =>
    set((state) => {
      if (state.count >= 1) return { count: state.count - 1 };
      else return { count: 0 };
    }),
  resetCount: () =>
    set((state) => {
      return { count: 0 };
    }),
  inputIncrement: (qty) => {
    set((state) => {
      return { qtyInc: qty };
    });
  },
  inputDecrement: (qty) => {
    set((state) => {
      return { qtyDec: qty };
    });
  },
  resetIncInput: () => {
    set((state) => ({ qtyInc: 0 }));
  },
  resetDecInput: () => {
    set((state) => ({ qtyDec: 0 }));
  },
  increment: (qty) =>
    set((state) => ({
      count: state.count + qty,
    })),
  decrement: (qty) =>
    set((state) => ({
      count: state.count - qty,
    })),
}));

let render = 0;
function Counter() {
  console.log(render++);
  const count = useCounterStore((state) => state.count);
  return (
    <div>
      <h1>Counter</h1>
      (for positive numbers only)
      <p>Count is {count}</p>
      <Controls />
    </div>
  );
}

export default Counter;
