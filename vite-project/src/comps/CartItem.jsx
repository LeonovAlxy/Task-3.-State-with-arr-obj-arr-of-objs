import { memo } from "react";
function CartItem({ item, onIncrement, onRemove }) {
  console.log("Cart Item", item.id);
  return (
    <li className="CartItem">
      <p>
        {item.title} (Кол-во: {item.count})
      </p>
      <div className="CartItemButtons">
        <button onClick={() => onIncrement(item.id)}>+1</button>
        <button onClick={() => onRemove(item.id)}>Удалить</button>
      </div>
    </li>
  );
}
export default memo(CartItem, (prevProps, nextProps) => {
  return prevProps.item.count === nextProps.item.count;
});
