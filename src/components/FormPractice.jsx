import { useState } from 'react'

function FormPractice() {
  const [name, setName] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Форма отправлена!')
    console.log(event.currentTarget)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Отправить</button>
    </form>
  )
}

export default FormPractice
