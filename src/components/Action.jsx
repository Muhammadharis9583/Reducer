import {useContext} from 'react'
import { ActionContext } from '../App';

function Action() {
    const {dispatch,count} = useContext(ActionContext)
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Action