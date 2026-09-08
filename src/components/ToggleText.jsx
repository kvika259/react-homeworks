import { useState } from 'react'

function ToggleText() {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      {toggle && 'Здесь есть текст'}
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? 'Скрыть' : 'Показать'}
      </button>
    </>
  )
}

export default ToggleText
