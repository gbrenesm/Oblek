import { useState } from 'react';

function Card({character}) {
  const [open, setOpen] = useState(false)
  
  return (
    <div className='card' onClick={() => setOpen(!open)}>
      {!open &&
      <div className="folder" style={{ backgroundImage:"url('images/Old_file_folder.png')"}}>
        <img src="images/Rick_and_morty.png" alt="Rick and Morty logo"/>
        <img src="images/Top_secret.png" alt="Top secret stamp"/>
        <h2>The Rick and Morty Agency</h2>
        <p>Name: {character.name}</p>
      </div>}
      {open && 
      <div className="more-info" style={{ backgroundImage:"url('images/Old_papper_background.jpg')"}}>
        <div>
          <h2>Ultra-secret report</h2>
          <p>No. <u>{character.id}</u>/671</p>
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
        <p>This information is secret and YOU CAN'T make any use of this.</p>
        {character.status === 'Dead' && <img src="images/Dead_stamp.png" alt="Dead stamp" className="dead-stamp"/>}
      </div>}
    </div>
  )
};

export default Card;