import React from 'react';
import './App.css';
import Oppmuntring from "./components/Oppmuntring";
import Bird from "./components/Bird";
import Gud from "./components/Gud";

const birds = ["seagull", "hummingbird", "blackbird", "parakeet"];

const guder = [
  {navn: "Balder", besk: "Ås, gud for lys, skjønnhet, kjærlighet og lykke"},
  {navn: "Brage", besk: "Ås, gud for diktning, veltalenhet og skaldekunst"},
  {navn: "Eir", besk: "Gudinne for legekunsten, en av Menglads Frøyas?) ni møyer"},
  {navn: "Frøya", besk: "Vane, fruktbarhetsgudinne"}
];


function App () {
  return (
    <div className="App">    
      <Oppmuntring navn="Rick Astley" emne="Kunsten å synge rent" />
      <ul>
      { birds.map( (bird, index) => <Bird name={bird} key={index} /> ) }
      </ul>
      <h1>Norrøne guder</h1>
      { guder.map( gud => <Gud navn={gud.navn} besk={gud.besk} /> ) }
    </div>
  );
}  

export default App;
