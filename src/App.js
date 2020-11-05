import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Axios from 'axios';
import PokemonCard from './Components/PokemonCard';

function App() {

  const [names,setNames] = useState([]);

  const getPokemonNames = () =>{
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then(res => setNames(res.data.results))
      .catch(err => console.log(err))
  };

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={getPokemonNames}>Fetch Pokemon</button>
      {
        names.map ((n,i) => {
          return <PokemonCard name={n} key={i}/>
        })
      }
    </div>
  );
}

export default App;
