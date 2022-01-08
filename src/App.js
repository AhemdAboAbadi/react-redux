import './App.css';
import { useSelector } from 'react-redux'

function App() {
  const count = useSelector(state => state.count)
  return (
    <div className="App">
      <header>
        <div>{count}</div>
        <button> Login </button>
      </header>
      <div className="counter">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default App;
