import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import { useState } from 'react'

export default function Images() {

  const backgrounds = [
    'url("../src/assets/images/image-product-1.png")',
    'url("../src/assets/images/image-product-2.png")',
    'url("../src/assets/images/image-product-3.png")',
    'url("../src/assets/images/image-product-4.png")'
  ]
  const [backgroundImage, setBackgroundImage] = useState({
    backgroundImage: backgrounds[0],
    backgroundSize: 'cover'
  })

  const backgroundIndex = backgrounds.indexOf(backgroundImage.backgroundImage)

  function previousImage(){
    if (backgroundIndex <= 0) return
    setBackgroundImage({
      backgroundImage: backgrounds[backgroundIndex - 1],
      backgroundSize: 'cover'
    })
  }

  function nextImage(){
    if (backgroundIndex >= 3) return
    setBackgroundImage({
      backgroundImage: backgrounds[backgroundIndex + 1],
      backgroundSize: 'cover',
    })
  }

  function handleThumbnail(e){
    const thumbs = document.querySelectorAll('.carrosel-thumbnail')
    let imgIndex = Number(e.target.id[4])
    setBackgroundImage({
      backgroundImage: backgrounds[imgIndex],
      backgroundSize: 'cover'
    })
    thumbs.forEach(item=>{
      item.classList.remove('selected')
    })
    e.target.classList.add('selected')
  }

  return (
    <section className='images-container'>
      <div className="main-image" style={backgroundImage}>
          <GrFormPrevious className='icons' onClick={previousImage}/>
          <GrFormNext className='icons' onClick={nextImage}/> 
      </div>
      <div className='carrosel'>
        <picture>
          <img className='carrosel-thumbnail selected' src="../src/assets/images/image-product-1-thumbnail.png" alt="" id='img-0' onClick={handleThumbnail}/>
          <div className='white'></div>
        </picture>
        <picture>
          <img className='carrosel-thumbnail' src="../src/assets/images/image-product-2-thumbnail.png" alt="" id='img-1' onClick={handleThumbnail}/>
          <div className='white'></div>
        </picture>
        <picture>
          <img className='carrosel-thumbnail' src="../src/assets/images/image-product-3-thumbnail.png" alt="" id='img-2' onClick={handleThumbnail}/>
          <div className='white'></div>
        </picture>
        <picture>
          <img className='carrosel-thumbnail' src="../src/assets/images/image-product-4-thumbnail.png" alt="" id='img-3' onClick={handleThumbnail}/>
          <div className='white'></div>
        </picture>
      </div>
    </section>
  )
}
