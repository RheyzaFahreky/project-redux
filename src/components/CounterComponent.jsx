import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from './redux/slices/counterSlice'

function CounterComponent() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </div><br/>
            <div>
                <input 
                type='number'
                onChange={(e) => 
                    dispatch(
                        incrementByAmount(parseInt(e.target.value) ||0)
                    )
                }
                placeholder='Enter value'
                /><br/><br/>
                <button onClick={() => dispatch(incrementByAmount(2))}>Add 2</button>
            </div>
        </div>
    );
}

export default CounterComponent;