import { useSelector, useDispatch } from 'react-redux';
import decrement from './actions/decrement';
import increment from './actions/increment';
import signIn from './actions/signIn';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(signIn())}>Login Toggle</button>

      {isLogged ? <h3>Valuable information that I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
