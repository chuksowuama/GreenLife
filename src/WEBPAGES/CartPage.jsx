import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {
  const cartResult=useSelector(state=>state.stored.cart)
  console.log(cartResult)
  return (
    <div className=''>
      HELOOOOOO
    </div>
  )
}

export default CartPage
