import React from 'react'

const Character = (props) => {
    // const handleClick = () => {
    //     props.onClick(props.characterName)
    // onClick={handleClick}}
    return(
        <div className="character">
            <h2>{props.name}</h2>
            <ul>
                <li>House: {props.house}</li>
                <li>Actor: {props.actor}</li>
                
            </ul>
            <img  src={props.img} alt={"Profile of " + props.name}/>
            <hr/>
            
        </div>
    )
}

export default Character