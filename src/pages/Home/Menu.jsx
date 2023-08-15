import {IoMdClose} from 'react-icons/io'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { useState, useEffect } from 'react'

export default function Menu() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const menuOptions = ['Collections', 'Men', 'Woman', 'About', 'Contact']
    const menuStyle = {
        display: isMenuOpen ? 'flex' : 'none',
    }

    useEffect(() => {
        function handleResize(){
          setIsMenuOpen(window.innerWidth >= 1024);
    
        };
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    function showMenu(){
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {isMenuOpen ? 
            <IoMdClose 
                className='menu-icon' 
                onClick={showMenu}
            /> : 
            <HiOutlineMenuAlt3 
                className='menu-icon' 
                onClick={showMenu}
            />}

            <ul className="menu-container" style={menuStyle}>
                {menuOptions.map(item=>{
                   return <li className='menu-opt' key={item}>{item}</li>
                })}
            </ul>
        </>
    )
}
