import { useSelector } from "react-redux";
import './Cart.css';
import { clearCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearCart());
    }

    if(cartItems.length === 0) return <h1 className="empty-cart">EMPTY CART</h1>
    return (
        <div className="cart-container">
            <h1>Cart container</h1>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
            {cartItems.map((item) => (
                <tr>
                    <td>{item[0]}</td>
                    <td>₹ {(item[1]/100).toFixed(2)}</td>
                </tr>
            ))}
            </table>
            <button className="clr-btn">Clear Cart</button>
        </div>
    )
}

export default Cart;