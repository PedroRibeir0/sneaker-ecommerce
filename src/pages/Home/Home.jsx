import '../../css/home/home.css'
import Header from './Header'
import Images from './Images'
import Main from './Main'
import Cart from './Cart'
import { useState } from 'react'

export default function Home() {
  
  const [amount, setAmount] = useState(0)
  const [count, setCount] = useState(0)
  
  function sendToCart(){
    setAmount(amount + count)
  }

  return (
    <>
      <Header
        amount={amount}
        trash={e=>setAmount(0)}
      />
      <Images/>
      <Main
        amount={count}
        minus={e=>{
          if (count <= 0) return
          setCount(count - 1)
        }}
        plus={e=> setCount(count + 1)}
        sendToCart={sendToCart}
      />
    </>
  )
}

