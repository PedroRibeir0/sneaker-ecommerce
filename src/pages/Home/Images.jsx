import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import { useState } from 'react'

export default function Images() {

  const backgrounds = [
    'url("/images/image-product-1.jpg")',
    'url("/images/image-product-2.jpg")',
    'url("/images/image-product-3.jpg")',
    'url("/images/image-product-4.jpg")'
  ]
  
  const [selected, setSelected] = useState(0)
  const backgroundImage = backgrounds[selected]

  function previousImage(){
    if (selected <= 0) return
    setSelected(selected -1)
  }

  function nextImage(){
    if (selected >= 3) return
    setSelected(selected + 1)
  }

  return (
    <section className='images-container'>
      <div className="main-image" style={{backgroundSize: 'cover', backgroundImage: backgroundImage}}>
          <GrFormPrevious className='icons' onClick={previousImage}/>
          <GrFormNext className='icons' onClick={nextImage}/> 
      </div>
      <div className='carrousel'>
        {[1,2,3,4].map((item, index)=> {
          return(
            <picture key={item}>
            <img className={`carrousel-thumbnail ${selected == index && 'selected'}`} 
            src={`/images/image-product-${item}-thumbnail.jpg`} 
            alt="product-image" 
            id={item-1} 
            onClick={e=>setSelected(e.target.id)}/>
            <div className='white'></div>
          </picture>
          )
        })}
      </div>
    </section>
  )
}
