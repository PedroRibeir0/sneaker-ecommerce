import '../../css/home/home.css'
import { useState } from 'react'
import Header from './Header'
import Images from './Images'
import Main from './Main'
import Product from './Product'


export default function Home() {

  const [amount, setAmount] = useState(0)
  const [count, setCount] = useState(0)

  const plus = ()=> setCount(count + 1)
  const minus = ()=> {
    if (count <= 0) return
    setCount(count - 1)
  }
  
  
  function sendToCart(){
    setAmount(amount + count)
  }

  return (
    <div className='home'>
      <Header
        price={Product.currentPrice}
        amount={amount}
        trash={e=>setAmount(0)}
      />
      <div className='main-images'>
        <Images/>
        <Main
          product={Product}
          amount={count}
          minus={minus}
          plus={plus}
          sendToCart={sendToCart}
        />
      </div>
    </div>
  )
}

