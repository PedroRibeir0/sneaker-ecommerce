import {HiMenu} from 'react-icons/hi'
import {BsCart3} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import Menu from './Menu'

export default function Header() {
  return (
    <header>
      <div>
        <Menu></Menu>
        <h2>sneakers</h2>
      </div>
      <div>
        <div id='cart-icon' data-number={2}>
          <BsCart3 className='header-icons'/>
        </div>
        <BiUserCircle className='header-icons'/>
      </div>
    </header>
  )
}
