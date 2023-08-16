import {IoMdClose} from 'react-icons/io'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { useState, useEffect } from 'react'

export default function Menu() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuOptions = ['Collections', 'Men', 'Woman', 'About', 'Contact']

    const changeMenuState = ()=> setIsMenuOpen(!isMenuOpen)

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

    return (
        <>
            {isMenuOpen ? 
            <IoMdClose 
                className='menu-icon' 
                onClick={changeMenuState}
            /> : 
            <HiOutlineMenuAlt3 
                className='menu-icon' 
                onClick={changeMenuState}
            />}
            {isMenuOpen &&
            <ul className="menu-container">
                {menuOptions.map(item=>{
                   return <li className='menu-opt' key={item}>{item}</li>
                })}
            </ul>}
        </>
    )
}
