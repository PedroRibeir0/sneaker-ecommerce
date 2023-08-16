import '../../css/checkout/checkout.css'
import { useOutletContext } from 'react-router-dom'

export default function Checkout() {

  const [amount] = useOutletContext()

  return (
    <div className='checkout'>
      <h1>{amount}</h1>
    </div>
  )
}

