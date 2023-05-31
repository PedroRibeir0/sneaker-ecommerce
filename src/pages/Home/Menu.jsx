import {IoMdClose} from 'react-icons/io'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { useState } from 'react'

export default function Menu() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const menuStyle = {
        display: isMenuOpen ? 'flex' : 'none',
        // animation: isMenuOpen ? 'showMenu 0.25s' : 'none' 
    }

    function showMenu(){
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {isMenuOpen ? <IoMdClose className='menu-icon' onClick={showMenu}/> : <HiOutlineMenuAlt3 className='menu-icon' onClick={showMenu}/>}
            <ul className="menu-container" style={menuStyle}>
                <li className='menu-opt'>Collections</li>
                <li className='menu-opt'>Men</li>
                <li className='menu-opt'>Woman</li>
                <li className='menu-opt'>About</li>
                <li className='menu-opt'>Contact</li>
            </ul>
        </>
    )
}
