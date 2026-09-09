import { useState } from 'react'
import ChildComponent from './ChildComponent'
import SiblingComponent from './SiblingComponent'

function ParentComponent() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Cчётчик: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
      <button onClick={() => setCount(0)}>Сбросить</button>
      <button onClick={() => setCount(Math.floor(Math.random() * 10) + 1)}>
        Случайное значение
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>Уменьшить</button>
      <ChildComponent counter={count} />
      <SiblingComponent />
    </div>
  )
}

export default ParentComponent
