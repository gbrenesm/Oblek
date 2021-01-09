import { useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Dropdown() {
  const [characters, setCharacters] = useState(null)
  const [selectedCharacters, setSelectedCharacters] = useState([])

  const removeWord = index => {
    setSelectedCharacters(selectedCharacters.filter((_, i) => i !== index))
  }

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
      console.log(data.results)
      setCharacters(data.results.slice(0, 15))
    }

    fetchData()
  }, [])

  return (
    <div>
      <ul>
        {selectedCharacters.map(character => (
              <li key={character.index}>{character.name}<span><FontAwesomeIcon icon={faTimes} onClick={()=> removeWord(character.index)}/></span></li>
        ))}
      </ul>
      <select name="character" id="character">
        {characters?.map(character =>(
          <option value={character.name}>{character.name}</option>
        ))}
      </select>
    </div>
  )
};

export default Dropdown;