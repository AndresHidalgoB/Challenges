import { decrement, increment } from './reducers/slices/counterSlice';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';

export const App=()=> {
    const { counter } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>App Counter Redux</h1>
            <hr />
            <span>Counter is: { counter }</span>
            <button onClick={() => dispatch( increment() )}>+1</button>
            <button onClick={() => dispatch( decrement() )}>-1</button>
        </div>
    );
}

