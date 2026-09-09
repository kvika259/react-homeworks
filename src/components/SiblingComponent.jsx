import { useState } from 'react'

function SiblingComponent() {
  const [text, setText] = useState('Блаблабла')
  return (
    <div>
      <p>Текущий текст: {text}</p>
      <button onClick={() => setText('REDEV')}>Изменить текст</button>
    </div>
  )
}

export default SiblingComponent
