import { useState } from 'react'

function List() {
  const [tasks, setTasks] = useState(['Купить хлеб', 'Погулять с собакой'])

  return (
    <div>
      <h3>Список задач</h3>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setTasks((prev) => [...prev, 'Новая задача'])}>
        Добавить задачу
      </button>
      <button
        onClick={() =>
          setTasks((prev) =>
            prev.filter((item, index) => index !== prev.length - 1)
          )
        }
      >
        Удалить последнюю задачу
      </button>
    </div>
  )
}

export default List
