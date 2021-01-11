import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


function Card({character}) {
  const [open, setOpen] = useState(false)
  return (
    <div className='card' onClick={() => setOpen(!open)}>
      <img src={character.image} alt="Character"/>
      <p>{character.name} {open? <span><FontAwesomeIcon icon={faChevronUp}/></span> : <span><FontAwesomeIcon icon={faChevronDown} /></span>}</p>
    </div>
  )
};

export default Card;