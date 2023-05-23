import {HiMenu} from 'react-icons/hi'
import {BsCart3} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import Menu from './Menu'
import Cart from './Cart'
import { useState } from 'react'

export default function Header({amount, trash}) {

  const [isCardOpen, setIsCardOpen] = useState(false)

  return (
    <>
    <header>
      <div>
        <Menu/>
        <h2 className='logo'>sneakers</h2>
      </div>
      <div>
        <div onClick={e=>setIsCardOpen(!isCardOpen)} id='cart-icon' data-number={amount}>
          <BsCart3 className='header-icons'/>
          {amount > 0 && <div className='ballon'>{amount}</div>}
        </div>
        <BiUserCircle className='header-icons'/>
      </div>
    </header>
    {isCardOpen && <Cart amount={amount} trash={trash}/>}
    </>
  )
}
