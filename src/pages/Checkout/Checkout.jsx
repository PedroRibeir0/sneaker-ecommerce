import '../../css/checkout/checkout.css'
import { useOutletContext } from 'react-router-dom'
import InputGroup from '../../components/InputGroup'
import InputConfig from '../../components/InputConfig'
import InfoBlock from './InfoBlock'
import Shipping from './Shipping'
import Method from './Methods'

export default function Checkout() {

  const [amount] = useOutletContext()

  return (
    <div className='checkout'>
      <InfoBlock 
        className={'shipping'}
        text={'shipping address'}
        content={<Shipping/>}
      />
      <InfoBlock 
        className={'shipping'}
        text={'shipping method'}
        content={<Method/>}
      />
    </div>
  )
}

