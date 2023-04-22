import { createSlice } from "@reduxjs/toolkit";

const initial = {
    counter: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initial,
    reducers: {
        increment: (state) => {state.counter += 1},
        decrement: (state) => {state.counter -= 1}
    }
});

export const { increment, decrement } = counterSlice.actions;