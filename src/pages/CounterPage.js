import Button from "../components/Button";
import { useReducer } from "react";
import Panel from '../components/Panel';
import { produce } from 'immer';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {

  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      throw new Error('Unexpected action received');
  }
}

function CounterPage({initialCount}) {

  const [state, dispatch] = useReducer( produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  });
  //console.log(state);

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    });
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT
    });
  }

  return <Panel>
    <h1 className="text-lg">Count is {state.count}</h1>
    <div className="flex flex-row">
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>

    <form onSubmit={handleSubmit}>
      <label>Add a lot!</label>
      <input 
        type="number" 
        className="p-1 m-3 bg-gray-50 border border-gray-300"
        value={state.valueToAdd}
        onChange={handleChange}
      />
      <Button>Add It!</Button>
    </form>
  </Panel>;
}

export default CounterPage;