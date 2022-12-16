import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] =useState(0);

  function handleIncrement (){
    setCount((countPrev) => {
      return countPrev + 1;
    });

    setCount((countPrev) => {
      return countPrev + 1;
    });
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => handleIncrement()}>Incrementar</button>
    </div>
  );
}

export default App;