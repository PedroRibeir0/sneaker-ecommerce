import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Product from './components/Product'
import { useState } from "react"

export default function App() {

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
    <div className="app">
        <Header
        price={Product.currentPrice}
        amount={amount}
        trash={e=>setAmount(0)}
        />
        <Outlet
        context={[amount, count, plus, minus, sendToCart]}
        />
    </div>
  )
}
