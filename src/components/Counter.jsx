import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Текущий счетчик: {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </div>
  )
}

export default Counter
