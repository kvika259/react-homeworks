import { useState } from 'react'

function ColorText() {
  const [style, setStyle] = useState('blue')

  return (
    <>
      <p style={{ color: style }}>Текст</p>
      <button
        onClick={() => setStyle((prev) => (prev == 'blue' ? 'red' : 'blue'))}
      >
        Изменить стиль
      </button>
    </>
  )
}

export default ColorText
