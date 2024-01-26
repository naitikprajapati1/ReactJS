import { useCart } from "../context/Cart"
const Cart = () => {
    // const cart = useContext(CartContext);
    const cart = useCart();
    console.log('Cart is ', cart);
    let totalBill = cart.item.reduce((a, b) => a + +b.price, 0);
    return (
        <>
            {
                cart.item.map((value) => (
                    <tr style={{ border: 0 }} key={Math.floor(Math.random() * 100)}>
                        <td colSpan={3}>
                            Product:-{value.name} &nbsp;&nbsp;
                            Price name:- {value.price}</td>

                    </tr>))
            }
            {/* <tfoot> */}
            <tr>
                <td colSpan={4}>Total Bill {totalBill}</td>
            </tr>
            {/* </tfoot> */}
        </ >
    )
}

export default Cart