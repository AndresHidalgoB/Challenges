import {initial,reducer} from '../Reducers/todoReducer2'
import { useEffect, useReducer, useState } from "react";

function initialize() {
    return JSON.parse(localStorage.getItem("todos"));
}

function countTodos(state) {
    return state.todos.length;
}

function countPending(state) {
    return state.todos.filter(x => !x.done).length;
}

export function useTodo() {
    const [state, dispatch] = useReducer(reducer, initial, initialize);
    // Todo Counters
    let [count, setCount] = useState(0);
    let [pending, setPending] = useState(0);

    useEffect(() => {
        // Change Counters
        let c = countTodos(state);
        let p = countPending(state);

        setCount(c);
        setPending(p);

        // Store TODOS
        const json = JSON.stringify(state)
        localStorage.setItem("todos", json);
    }, [state]);

    return [state, count, pending, dispatch];
}