import { useState } from 'react'
import {BiMinus, BiPlus} from 'react-icons/bi'
import {BsCart3} from 'react-icons/bs'

export default function Buttons() {

    const [amount, setAmount] = useState(0)

    return (
    <div className='buttons'>
        <div className='amount'>
            <BiMinus onClick={e=> {
                if (amount <= 0) return
                setAmount(amount - 1)
            }} className='minus-plus'/>
            <span>{amount}</span>
            <BiPlus onClick={e=> setAmount(amount + 1)} className='minus-plus'/>
        </div>
        <button className='add-cart-button'><BsCart3 className='cart-icon'/><span>Add to cart</span></button>
    </div>
  )
}


