import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const {count} = useSelector(state => state)

  const plus = () => dispatch({type: 'COUNT'})
  const minus = () => dispatch({type: 'MINUS'})

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
    </div>
  );
}

export default App;
