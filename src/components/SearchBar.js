import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  const [wordsArray, setWordsArray] = useState([])
  const [placeHolder, setPlaceHolder] = useState("Buscar palabras clave")
  const [disabled, setDisabled] = useState(true)
  

  const addWords = e => {
    //Cheking if 'Enter' has been press and the value is not empty so then I can add the new word or phrase to the array.
    if (e.code === 'Enter' && e.target.value !== ''){
      //Adding the new word or phrase to the array.
      setWordsArray([...wordsArray, e.target.value])
      //Cleaning the input so the new value is not all the words that has already been added.
      e.target.value = ''
      // Setting button to enable and remove placeholder.
      setDisabled(false)
      setPlaceHolder("")
    }
  }

  const removeWord = indexWord => {
    //Filtering to remove a word.
    setWordsArray(wordsArray.filter((_, i) => i !== indexWord))
    if (wordsArray.length === 1){
      setDisabled(true)
      setPlaceHolder("Buscar palabras clave")
    }
  }

  return (
    <div className='search-bar'>
      <h1>1. Barra de navegación</h1>
      <div>
        <div>
          <ul>
            {wordsArray.map((word, i)=> (
              <li key={i}>{word}<span><FontAwesomeIcon icon={faTimes} onClick={()=> removeWord(i)}/></span></li>
            ))}
          </ul>
            <input onKeyPress={addWords} type="text" placeholder={placeHolder}/>
        </div>
        <button type="submit" disabled={disabled} >Buscar</button>
      </div>
        <p>Presiona "Enter" para generar cada palabra</p>
    </div>
  )
};

export default SearchBar;