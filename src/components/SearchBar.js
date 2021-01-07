import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  const [wordsArray, setWordsArray] = useState([])
  const [placeHolder, setPlaceHolder] = useState("Buscar palabras clave")
  const [disabled, setDisabled] = useState(true)
  
  const onChange = e => {
    e.preventDefault()
    setPlaceHolder("")
    setDisabled(false)
    if (wordsArray.length === 0) setPlaceHolder("Buscar palabras clave")
  }

  const addWords = e => {
    //Cheking if 'Enter' has been press so then I can add the new word or phrase to the array.
    if (e.code === 'Enter'){
      //Adding the new word or phrase to the array.
      setWordsArray([...wordsArray, e.target.value])
      //Cleaning the input so the value is not all the words that has already been added.
      e.target.value = ''
      setDisabled(false)
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
      <form onSubmit={onChange}>
        <input onKeyPress={addWords} type="text" placeholder={placeHolder}/>
        <button type="submit" disabled={disabled} >Buscar</button>
      </form>
      <p>Presiona "Enter" para generar cada palabra</p>
    </div>
  )
};

export default SearchBar;