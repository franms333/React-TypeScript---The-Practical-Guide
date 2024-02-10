import { addToCart, removeFromCart, type CartItem } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

export default function CartItems() {
  const cartItems = useCartSelector(state => state.cart.items);
  const dispatch = useCartDispatch();

  function handleRemoveFromCart(id:string){
    dispatch(removeFromCart(id));
  }

  function handleAddToCart(item:CartItem){
    dispatch(addToCart(item));
  }

  const totalPrice = cartItems.reduce((currentValue, currentItem)=>currentValue + currentItem.price * currentItem.quantity,0)
  const formattedTotalPrice = totalPrice.toFixed(2);

  if(cartItems.length === 0){
    return <p>No items in cart!</p>
  }

  return (
    <div id="cart">
      <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
