import InputConfig from "../../components/InputConfig"
import InputGroup from "../../components/InputGroup"

export default function Shipping({}) {
  return (
    <div className='shipping'>
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
  )
}
