import { useContext } from "react"
import { CartContext } from "../context/Cart"
/* eslint-disable react/prop-types */
const Item = (props) => {
    const cart = useContext(CartContext)
    console.log(cart);
    return (
        // <tbody>
        <tr>
            <th>{props.name}</th>
            <td>{props.price}</td>
            <td>
                <button onClick={() => cart.setItem([...cart.item, { name: props.name, price: props.price }])}>Add to Cart</button>
            </td>
        </tr>
        // </tbody>
    )
}

export default Item