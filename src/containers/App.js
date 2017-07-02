import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import LoginContainer from './LoginContainer'

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr/>

    <ProductsContainer />
    <hr/>

    <CartContainer />
    <hr/>

    <LoginContainer />
  </div>
)

export default App
