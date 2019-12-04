import React from 'react';
import './App.css';
import RickMorty from "./components/RickMorty";
import Karakterer from "./components/Karakterer";


const App = () => {
  return (
    <div className="App">
      <div>
        <h1>Rick and Morty Characters</h1>
        <main>
          <div className="karakterer">
            {
            karakterer.map( (karakter, indeks) => <Karakterer  key={indeks} name={karakter} /> )
            }
          </div>
        </main>  
      </div>   
    </div>
  );
}

export default App;
