import { useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronDown, faChevronUp, faCheck } from '@fortawesome/free-solid-svg-icons'

function Dropdown() {
  const [characters, setCharacters] = useState(null)
  const [selectedCharacters, setSelectedCharacters] = useState([])
  const [open, setOpen] = useState(false)
  
  const removeCharacter = character => {
    setSelectedCharacters(selectedCharacters.filter(elem => elem.id !== character.id))
  }

  const addCharacter = character => {
    // Firs I check if the element is alredy in the selectedChracters arrar.
    if(!selectedCharacters.some(elem => elem.id === character.id)) {
      //If not the elemet is added.
    setSelectedCharacters([...selectedCharacters, character]) 
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
      <ul>
        {selectedCharacters.map(character => (
              <li key={character.id}>{character.name}<span><FontAwesomeIcon icon={faTimes} onClick={()=> removeCharacter(character)}/></span></li>
        ))}
      </ul>
      <div>
        <p onClick={() => setOpen(!open)}>Selcciona un personaje <span>{open? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}</span></p>
        
        {open && <ul>
          {characters?.map(character =>(
            <li key={character.name} onClick={() => addCharacter(character)}>{character.name}
              {/* In this span I check if the element is selected, if true then shows a check symbol. */}
              <span>{selectedCharacters.some(elem => elem.id === character.id) && <FontAwesomeIcon icon={faCheck}/>}</span>
            </li>
          ))}
        </ul>}
      </div>
    </div>
  )
};

export default Dropdown;