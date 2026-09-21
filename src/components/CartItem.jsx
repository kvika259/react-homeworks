import React from 'react'

const CartItem = React.memo(({ item, setCart }) => {
  console.log(`Render ${item.title}`)
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
    <li>
      {item.title} (Кол-во: {item.count})
      <button onClick={() => handlePlus(item.id)}>+1</button>
      <button onClick={() => handleDel(item.id)}>Удалить</button>
    </li>
  )
})

export default CartItem
