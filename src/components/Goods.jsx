import { useState } from 'react'

function Goods() {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])

  const handlePlus = (id) => {
    setCart((prev) =>
      [...prev].map((item) =>
        item.id == id ? { ...item, count: item.count + 1 } : item
      )
    )
  }

  const handleDel = (id) => {
    setCart((prev) => [...prev].filter((item) => item.id != id))
  }

  return (
    <div>
      <h3>Корзина товаров</h3>
      <ol>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} (Кол-во: {item.count})
            <button onClick={() => handlePlus(item.id)}>+1</button>
            <button onClick={() => handleDel(item.id)}>Удалить</button>
          </li>
        ))}
      </ol>
      <button onClick={() => setCart([])}>Очистить корзину</button>
    </div>
  )
}

export default Goods
