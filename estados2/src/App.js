import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('Vinicius');
  const [bool, setBool] = useState(false);
  const [car, setCar] = useState({
    id: 1,
    name: 'Corolla',
    color: 'Black'
  });
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: 'Movie 1',
      active: false
    },
    {
      id: 2,
      name: 'Movie 2',
      active: true
    }
  ]);

  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{bool ?  'true' : 'false'}</h1>
      <h1>{car.name}</h1>
      <h1>{movies[0].name}</h1>
    </div>
  );
}

export default App;
