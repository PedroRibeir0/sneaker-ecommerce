import '../../css/checkout/checkout.css'
import{ VscTriangleDown, VscTriangleUp} from 'react-icons/vsc'
import { useOutletContext } from 'react-router-dom'
import InputGroup from '../../components/InputGroup'
import InputConfig from '../../components/InputConfig'

export default function Checkout() {

  const [amount] = useOutletContext()

  return (
    <div className='checkout'>
      <section className='shipping-address'>
        <div className='name-oc'>
          <h2>shipping address</h2>
          <VscTriangleUp/>
        </div>
        <div className='input-list'>
          {InputConfig.shipping.map(item=>{
            return( 
            <InputGroup 
            id={item.id} 
            placeholder={item.placeholder} 
            type={item.type}
            key={item.id}
            />)
          })}
        </div>
      </section>
    </div>
  )
}

