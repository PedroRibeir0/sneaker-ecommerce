import '../../css/checkout/checkout.css'
import { useEffect, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import inputConfig from './inputConfig'
import schema from './schema'
import { mask, unMask } from 'remask'



export default function Checkout() {

  // useEffect(()=> setFocus('firstName'), [])

  const [amount] = useOutletContext()
  const inputRef = useRef();

  const {
    register,
    handleSubmit,
    setFocus,
    formState : {errors}
  } = useForm({
    mode: 'all',
    resolver: zodResolver(schema)
  })

  return (
    <form 
      className='checkout' 
      onSubmit={handleSubmit(data=>console.log(data))}
    >
      <section className='info-block shipping'>
        <h2>shipping address</h2>
        <div className='sect-inputs'>
          {inputConfig.shipping.map(input=>{
            return(
              <div className="input-group" key={input.id}>

                <input
                type={input.type} 
                {...register(input.id)}
                onChange={e=>{
                  if (input.mask){
                    e.target.value = mask(e.target.value, [input.mask])
                  }
                }}
                />
              
              <span className='placeholder'>{input.placeholder}</span>
              {errors[input.id] && 
              <span className='warning'>
                {errors[input.id].message}
              </span>}
            </div>
            )
          })}
        </div>
      </section>

      <button type='submit'>SUBMIT</button>
    </form>
  )
}

