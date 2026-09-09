import { useState } from 'react'

function UserProfile() {
  const [user, setUser] = useState({
    name: 'Иван',
    age: 25,
    isActive: true,
  })
  return (
    <div>
      <h3>Профиль пользователя</h3>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? 'Активен' : 'Неактивен'}</p>
      <button onClick={() => setUser((prev) => ({ ...prev, name: 'Олег' }))}>
        Сменить имя
      </button>
      <button
        onClick={() => setUser((prev) => ({ ...prev, age: prev.age + 1 }))}
      >
        Увеличить возраст
      </button>
      <button
        onClick={() =>
          setUser((prev) => ({ ...prev, isActive: !prev.isActive }))
        }
      >
        Переключить активность
      </button>
    </div>
  )
}

export default UserProfile
