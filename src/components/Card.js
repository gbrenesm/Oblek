import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


function Card({character}) {
  const [open, setOpen] = useState(false)
  
  return (
    <div className='card' onClick={() => setOpen(!open)}>
      {open &&
      <div className="basic">
        <img src={character.image} alt="Character"/>
        <p>{character.name} <span><FontAwesomeIcon icon={faMinus}/></span></p>
      </div>}
      {!open && 
      <div className="more-info" >
        <div>
          <h2>Personal card</h2>
          <p>No. {character.id}/671</p>
        </div>
        <div>
          <div>
            <p>Name: <u>{character.name}</u></p>
            <p>Species: <u>{character.species}</u></p>
            <p>Gender: <u>{character.gender}</u></p>
          </div>
          <div>
            <img src={character.image} alt="Character"/>
          </div>
        </div>
        <p>Origin: <u>{character.origin.name}</u></p>
        <p>Last know location: <u>{character.location.name}</u></p>
        {character.status === 'Dead' && <img src="Dead_stamp.png" alt="Dead stamp"/>}
      </div>}
    </div>
  )
};

export default Card;