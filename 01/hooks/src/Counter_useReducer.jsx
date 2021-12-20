import React, { useReducer } from 'react';

const Counter_useReducer = () => {
    //the initial state of our counter will be 0, this state can also be more complex and be an object with multiple key value pairs depending on the needs of your application
    const initialState = 0;

    /*
    just like in redux our reducer takes in two parameters: 
    1. current state 
    2. action (this is what dispatch passes in, whatever we call dispatch with gets set to this action)

    To summarize the reducer 
    1. takes in the current state and an action
    2. updates state based on the action
    3. returns updated state
    */
    const reducer = (state, action) => {
        switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        //the default case is what happens when no criteria were met in the switch statement, it's a good place to maybe throw an error or in this case just return the current state thereby showing that no change was made
        default:
            return state;
        }
    };

    /*
    useReducer takes in two parameters, a reducer and an initial state and returns an array with two values:
    1. our state (in this case the count) 
    2. a dispatch function which is what we call to update our state (similary to how useState returns an array with the state and a function to update the state). Dispatch calls our reducer and passes in our action
    */
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Counter_useReducer: {count}</h1>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}

export default Counter_useReducer
