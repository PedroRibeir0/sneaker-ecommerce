import { useState } from 'react'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {BsCart3} from 'react-icons/bs'

export default function Buttons(props) {

    return (
    <div className='buttons'>
        <div className='amount'>
            <BiMinus onClick={props.minus} className='minus-plus'/>
            <span>{props.amount}</span>
            <BiPlus onClick={props.plus} className='minus-plus'/>
        </div>
        <button onClick={props.sendToCart} className='add-cart-button'><BsCart3 className='cart-icon'/><span>Add to cart</span></button>
    </div>
  )
}


