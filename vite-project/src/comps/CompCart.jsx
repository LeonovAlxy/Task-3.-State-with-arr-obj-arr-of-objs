import { useState } from "react";
import "./Card.css";

function CompCart() {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);
  const handleClickCartCleanUp = () => setCart((cart) => (cart = []));
  const cartList = cart.map((cartItem, cartIndex) => {
    return (
      <div class="CartItem">
        <p>
          {cartItem.title} (Кол-во: {cartItem.count})
        </p>
        <div class="CartItemButtons">
          <button
            onClick={() =>
              setCart((prevCart) => {
                const newCart = prevCart.map((item, i) =>
                  i === cartIndex ? { ...item, count: item.count + 1 } : item
                );
                return newCart;
              })
            }
          >
            +1
          </button>
          <button
            onClick={() => {
              setCart((cart) => cart.filter((item) => item != cartItem));
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    );
  });
  return (
    <div class="Card" name="ShoppingCartCard">
      <h3>Корзина товаров</h3>
      {cartList}
      <button onClick={handleClickCartCleanUp}>Очистить корзину</button>
    </div>
  );
}
export default CompCart;
