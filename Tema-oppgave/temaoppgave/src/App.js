import React, {useState} from 'react'
import './App.css';
import characters from "./components/GameOfThrones";
import Character from "./components/Character";
import './components/characters.css'


const Got = () => {

    const [stateCharacters, setStateCharacters] = useState(characters.characters)
    
    const removeCharacter = (e) => {
      setStateCharacters(stateCharacters.filter( c => c.name !== e ))
  }

    return (
        <div className="main">
            <h2>Characters in Game Of Thrones</h2>
            <p></p>
            <div className="characters">
                {stateCharacters.map( (characters, index) =>
                 <Character key={index} name={characters.characterName} img={characters.characterImageFull} onClick={removeCharacter}/>
             )}
            </div>
        </div>
    )
}


export default Got