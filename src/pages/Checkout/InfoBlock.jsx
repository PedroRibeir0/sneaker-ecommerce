import { useState } from 'react'
import { VscTriangleUp } from 'react-icons/vsc'

export default function InfoBlock({content, className, text}) {

    const [isBlockOpen, setIsBlockOpen] = useState(true)
    const changeBlockState = ()=> setIsBlockOpen(!isBlockOpen)

    return (
    <section className={className+' info-block'}>
        <div className='name-oc'>
          <h2>{text}</h2>
          <VscTriangleUp 
            onClick={changeBlockState}
            className={`triangle-icon ${!isBlockOpen && 'up'}`}
          />
        </div>
        {
          isBlockOpen &&
          <div className='content-container'>
            {content}
          </div>
        }
    </section>

  )
}
