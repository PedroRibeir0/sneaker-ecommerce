import {BsCart3} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import Menu from '../pages/Home/Menu'
import Cart from './Cart'
import { useState } from 'react'

export default function Header({amount, trash, price}) {

  const [isCardOpen, setIsCardOpen] = useState(false)

  const closeCart = ()=> setIsCardOpen(false)
    
  return (
    <>
    <header>
      <div className='container'>
        <Menu/>
        <h2 className='logo'>sneakers</h2>
      </div>
      <div className='container'>
        <div 
        onClick={e=>setIsCardOpen(!isCardOpen)} 
        id='cart-icon' 
        data-number={amount}>
          <BsCart3 className='header-icons'/>
          {amount > 0 && <div className='ballon'>{amount}</div>}
        </div>
        <BiUserCircle className='header-icons'/>
      </div>
    </header>
    {isCardOpen && 
    <Cart 
    amount={amount} 
    trash={trash} 
    closeCart={closeCart}
    price={price}/>}
    </>
  )
}
