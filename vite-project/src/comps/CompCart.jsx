import { memo } from "react";
import CartItem from "./CartItem";
import "./Card.css";

function CompCart({ cart, setCart }) {
  console.log("Cart");

  const handleClickCartCleanUp = () => setCart([]);

  const handleIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartList = cart.map((cartItem) => (
    <CartItem
      key={cartItem.id}
      item={cartItem}
      onIncrement={handleIncrement}
      onRemove={handleRemove}
    />
  ));

  return (
    <div className="Card" name="ShoppingCartCard">
      <h3>Корзина товаров</h3>
      {cartList}
      <button onClick={handleClickCartCleanUp}>Очистить корзину</button>
    </div>
  );
}

export default memo(CompCart);
