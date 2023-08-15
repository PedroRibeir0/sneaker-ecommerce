import { useState } from 'react'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {BsCart3} from 'react-icons/bs'

export default function Buttons({minus, plus, amount, sendToCart}) {

    return (
    <div className='buttons'>
        <div className='amount'>
            <BiMinus onClick={minus} className='minus-plus'/>
            <span>{amount}</span>
            <BiPlus onClick={plus} className='minus-plus'/>
        </div>
        <button onClick={sendToCart} className='add-cart-button'><BsCart3 className='cart-icon'/><span>Add to cart</span></button>
    </div>
  )
}


