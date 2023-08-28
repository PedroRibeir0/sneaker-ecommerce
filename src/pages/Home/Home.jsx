import '../../css/home/home.css'
import Images from './Images'
import Main from './Main'
import Product from '../../components/Product'
import { useOutletContext } from 'react-router-dom'


export default function Home() {

  const [count, plus, minus, sendToCart]= useOutletContext().slice(2)

  return (
    <div className='home'>
      <div className='main-images'>
        <Images/>
        <Main
          product={Product}
          count={count}
          minus={minus}
          plus={plus}
          sendToCart={sendToCart}
        />
      </div>
    </div>
  )
}

