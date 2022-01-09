import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/actions'

function App() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header>
        <div>{count}</div>
        <button> Login </button>
      </header>
      <div className="counter">
        <button onClick={() => dispatch(increment(3))}>+ 3</button>
        <button onClick={() => dispatch(increment())}>+ 1</button>
        <button onClick={() => dispatch(decrement())}>- 1</button>
      </div>
    </div>
  );
}

export default App;
