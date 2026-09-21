import { useState } from 'react'
import CartItem from './CartItem'

function Goods() {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])

  return (
    <div>
      <h3>Корзина товаров</h3>
      <ol>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} setCart={setCart} />
        ))}
      </ol>
      <button onClick={() => setCart([])}>Очистить корзину</button>
    </div>
  )
}

export default Goods
