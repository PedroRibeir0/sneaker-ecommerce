import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import { useState } from 'react'

export default function Images() {

  const backgrounds = [
    'url("../src/assets/images/image-product-1.jpg")',
    'url("../src/assets/images/image-product-2.jpg")',
    'url("../src/assets/images/image-product-3.jpg")',
    'url("../src/assets/images/image-product-4.jpg")'
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

  return (
    <section className='images-container'>
      <div className="main-image" style={backgroundImage}>
          <GrFormPrevious className='icons' onClick={previousImage}/>
          <GrFormNext className='icons' onClick={nextImage}/> 
      </div>
      <div className='carrosel'>
        <img className='carrosel-thumbnail' src="../src/assets/images/image-product-1-thumbnail.jpg" alt="" />
        <img className='carrosel-thumbnail' src="../src/assets/images/image-product-2-thumbnail.jpg" alt="" />
        <img className='carrosel-thumbnail' src="../src/assets/images/image-product-3-thumbnail.jpg" alt="" />
        <img className='carrosel-thumbnail' src="../src/assets/images/image-product-4-thumbnail.jpg" alt="" />
      </div>
    </section>
  )
}
