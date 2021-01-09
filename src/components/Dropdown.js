import { useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Dropdown() {
  const [characters, setCharacters] = useState(null)
  const [selectedCharacters, setSelectedCharacters] = useState([])

  const addCharacter = character => {
    setSelectedCharacters([...selectedCharacters, character])
    setCharacters(characters.filter(elem => elem.id !== character.id))
  }

  const removeCharacter = character => {
    setSelectedCharacters(selectedCharacters.filter(elem => elem.id !== character.id))
    setCharacters([...characters, character])
  }

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
      setCharacters(data.results.slice(0, 15))
    }

    fetchData()
  }, [])

  return (
    <div>
      <ul>
        {selectedCharacters.map(character => (
              <li key={character.id}>{character.name}<span><FontAwesomeIcon icon={faTimes} onClick={()=> removeCharacter(character)}/></span></li>
        ))}
      </ul>
      <ul>
        {characters?.map(character =>(
          <li key={character.name} onClick={() => addCharacter(character)}>{character.name}</li>
        ))}
      </ul>
    </div>
  )
};

export default Dropdown;