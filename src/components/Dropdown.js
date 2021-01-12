import { useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronDown, faChevronUp, faCheck } from '@fortawesome/free-solid-svg-icons'

function Dropdown() {
  const [characters, setCharacters] = useState(null)
  const [selectedCharacters, setSelectedCharacters] = useState([])
  const [emptyArray, setEmptyArray] = useState(true)
  const [open, setOpen] = useState(false)
  
  const removeCharacter = character => {
    setSelectedCharacters(selectedCharacters.filter(elem => elem.id !== character.id))
    if (selectedCharacters.length === 1) setEmptyArray(true)
  }

  const addCharacter = character => {
    // Firs I check if the element is alredy in the selectedChracters arrar.
    if(!selectedCharacters.some(elem => elem.id === character.id)) {
      //If not the elemet is added.
    setSelectedCharacters([...selectedCharacters, character])
    setEmptyArray(false)
    } else {
      // Else is removed from the array.
      removeCharacter(character)
    }
  }

  // To fecth the data from the Rick and Morty API.
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
      setCharacters(data.results.slice(0, 15))
    }

    fetchData()
  }, [])

  return (
    <div className="dropdown">
      <h1>2. Dropdown de API</h1>
      <div>
        {!emptyArray &&
          <ul>
            {selectedCharacters.map(character => (
              <li key={character.id}>{character.name}<span><FontAwesomeIcon icon={faTimes} onClick={()=> removeCharacter(character)}/></span></li>
            ))}
          </ul>}
        {emptyArray && <p onClick={() => setOpen(!open)}>Selcciona un personaje</p>}
        <p onClick={() => setOpen(!open)}>{open? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}</p>
      </div>
      {open && <div>
        <ul>
          {characters?.map(character =>(
            <div key={character.name}>
            <li onClick={() => addCharacter(character)}>{character.name}</li>
              {/* Here I check if the element is selected, if true then shows a check symbol. */}
            <p onClick={() => addCharacter(character)}>{selectedCharacters.some(elem => elem.id === character.id) && <FontAwesomeIcon icon={faCheck}/>}</p>
            </div>
          ))}
        </ul>
      </div>}
      <hr/>
      <h1>3. Tarjetas de API</h1>
      {!emptyArray && <p>Has click en cualquier tarjeta para ver la imagen más grande.</p>}
      <section>
        {/* First I sort the array by the id of the chracters, so the Cards display in that order */}
        {!emptyArray && selectedCharacters.sort((a, b) => a.id - b.id).map(character => (
          <Card key={character.id} character={character}/>
          ))}
        {emptyArray && <p>No hay personajes selccionados aún.</p>}
      </section>
    </div>
  )
};

export default Dropdown;