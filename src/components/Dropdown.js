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
            <div>
            <li key={character.name} onClick={() => addCharacter(character)}>{character.name}
            </li>
              {/* Here I check if the element is selected, if true then shows a check symbol. */}
            <p>{selectedCharacters.some(elem => elem.id === character.id) && <FontAwesomeIcon icon={faCheck}/>}</p>
            </div>
          ))}
        </ul>
      </div>}
      <hr/>
      <section>
        {!emptyArray && selectedCharacters.map(character => (
          <Card character={character}/>
        ))}
      </section>
    </div>
  )
};

export default Dropdown;