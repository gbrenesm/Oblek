import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


function Card({character}) {
  const [open, setOpen] = useState(false)
  return (
    <div className='card' onClick={() => setOpen(!open)}>
      {!open &&
      <div className="basic">
        <img src={character.image} alt="Character"/>
        <p>{character.name} {open? <span><FontAwesomeIcon icon={faMinus}/></span> : <span><FontAwesomeIcon icon={faPlus} /></span>}</p>
      </div>}
      {open && 
      <div className="more-info" >
        <div>
          <div>
            <p>Name: <u>{character.name}</u> </p>
            <p>Species: {character.species}</p>
          </div>
          <img src={character.image} alt="Character"/>
        </div>
      </div>}
    </div>
  )
};

export default Card;