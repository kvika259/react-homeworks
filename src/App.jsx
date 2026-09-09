import { useRef, useState } from 'react'
import ListRef from './components/ListRef'

function App() {
  const [arr, setArr] = useState([])
  const [text, setText] = useState('')

  const inputRef = useRef()

  const handleEnter = (e) => {
    if (e.key == 'Enter') {
      setArr((prev) => [...prev, e.target.value])
      setText('')
    }
  }

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleEnter}
        ref={inputRef}
      />
      <button onClick={focusInput}>Фокус</button>
      <ListRef arr={arr} setArr={setArr} />
    </>
  )
}

export default App
