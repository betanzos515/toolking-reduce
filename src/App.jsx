import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy } from './store/slices/counter/counterSlice';

import { useState } from 'react';
function App() {  

  const { counter } = useSelector(state => state.counter);
  const [ state, setState ] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e)=>{
    setState(e.target.value);
    console.log(state);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      The counter is : { counter }

      <div className="card">
        <button onClick={() =>{ dispatch( increment() ) }}>
          Increment
        </button>
      </div>
      <div className="card">
        <button onClick={() =>{ dispatch( decrement() ) }}>
          Decrement
        </button>
      </div>
      <div className="card">
        <button onClick={
          () =>{ 
          dispatch( incrementBy(state));
          setState('');
        }}>
          Increment By
        </button>
        <input 
          type='text' 
          placeholder='ingresa el valor a decrementar'
          name='increment'
          onChange={ handleChange } 
          value={ state }
          />
      </div>
    </div>
  )
}

export default App
