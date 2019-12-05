import React from 'react'

const Character = (props) => {
    // const handleClick = () => {
    //     props.onClick(props.characterName)
    // onClick={handleClick}}
    return(
        <div className="character">
            <h2>{props.name}</h2>
            <img  src={props.img} alt={"Profile of " + props.name}/>
            <hr/>
            <p>
                {props.actorName}<br/>
            </p>
        </div>
    )
}

export default Character