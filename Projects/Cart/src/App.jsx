import React from 'react'
import Item from './components/Item'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <h1>Add to Cart functionality</h1>
      <table>
        <thead>
          <tr>

            <th>Product Name</th>
            <th>Product Price</th>
            <th>Buy Product</th>
          </tr>
        </thead>
        <tbody>

          <Item name="I-MAC" price="100000" />
          <Item name="Mobile" price="50000" />
          <Item name="Tablet" price="30000" />
          <Cart />
        </tbody>
      </table>
    </>
  )
}

export default App