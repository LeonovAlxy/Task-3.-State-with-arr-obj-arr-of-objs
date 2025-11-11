import { memo } from "react";
import "./Card.css";

function CompCart({ cart, setCart }) {
  console.log("Cart");

  const handleClickCartCleanUp = () => setCart([]);
  const cartList = cart.map((cartItem, cartIndex) => {
    return (
      <li key={cartItem.id} className="CartItem">
        <p>
          {cartItem.title} (Кол-во: {cartItem.count})
        </p>
        <div className="CartItemButtons">
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
      </li>
    );
  });
  return (
    <div className="Card" name="ShoppingCartCard">
      <h3>Корзина товаров</h3>
      {cartList}
      <button onClick={handleClickCartCleanUp}>Очистить корзину</button>
    </div>
  );
}
export default memo(CompCart);
