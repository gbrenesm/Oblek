import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  const [wordsArray, setWordsArray] = useState([])

  function onSubmit(e){
    e.preventDefault()
  }

  function addWords(e){
    //Cheking if 'Enter' has been press so then I can add the new word or phrase to the array.
    if (e.code === 'Enter'){
      //Adding the new word or phrase to the array.
      setWordsArray([...wordsArray, e.target.value])
      //Cleaning the input so the value is not all the words that has already been added.
      e.target.value = ''
    }
  }

  const removeWord = indexWord => {
    setWordsArray(wordsArray.filter((_, i) => i !== indexWord))
  }

  return (
    <div>
      <ul>
        {wordsArray.map((word, i)=> (
          <>
          <li key={i}>{word}<FontAwesomeIcon icon={faTimes} onClick={()=> removeWord(i)}/></li>
          </>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input onKeyPress={addWords} type="text" placeholder="Buscar palabras clave"/>
        <button type="submit">Buscar</button>
      </form>
      <p>Presiona "Enter" para generar cada palabra</p>
    </div>
  )
};

export default SearchBar;