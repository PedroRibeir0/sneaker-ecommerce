import '../../css/checkout/checkout.css'
import { useState, useEffect} from 'react'
import { useOutletContext } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import inputConfig from './inputConfig'
import schema from './schema'
import { mask } from 'remask'

export default function Checkout() {

  // useEffect(()=> setFocus('firstName'), [])

  const [amount] = useOutletContext()
  const [selectedMethod, setSelectedMethod] = useState(-1)
  const [selectedPayment, setSelectedPayment] = useState(-1)

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
      <section className='info-block'>
        <h2>shipping address</h2>
        <div className='inputs-container'>
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
      <section className='info-block ship-methods'>
          <h2>Shipping Method</h2>
          <div className='radios-container'>
            {inputConfig.shipMethods.map((method, index)=>{
              let isSelected = index == selectedMethod
              return(
                <div 
                key={method.id}
                className={`method ${isSelected && 'selected'}`} 
                onClick={
                  e=> setSelectedMethod(index)
                }>
                  <input 
                    type="radio" 
                    value={method.id}
                    {...register('methodRadio')}
                    checked={isSelected}
                  />
                  <span className='method-price'>
                    {method.price.toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                      })}
                  </span>
                  <span className='method-description'>
                    <span>{method.name}</span>
                    <span>
                    {`(${method.minDays} - ${method.maxDays} days)`}
                    </span>
                  </span>
                </div>
              )
            })}
            {errors.methodRadio && 
            <span className='warning'>
              You most pick a shipping method
            </span>}
          </div>
      </section>
      <section className="info-block payment">
        <h2>Payment Method</h2>
        <div className="radios-container">
          <div 
            className={`paypal ${selectedPayment == 0 && 'selected'}`}
            onClick={e=>{
              setSelectedPayment(0)
            }}>
            <input 
            type="radio" 
            value={'paypal'}
            {...register('paymentRadio')}
            checked={selectedPayment == 0} 
            />
            <span className='payment-name'>Paypal</span>
            <span className='paypal-explain'>
              You will be redirected to the PayPal website 
            </span>
            <picture className='payment-icon'>
              <img src="/images/paypal-logo.svg" alt="paypal-logo" />
            </picture>
          </div>
          <div 
            className={`credit-card ${selectedPayment == 1 && 'selected'}`}
            onClick={e=>{
              setSelectedPayment(1)
            }}>
            <div className='visible'>
              <div className="input-name">
                <input
                  type="radio"
                  value={'card'}
                  {...register('paymentRadio')}
                  checked={selectedPayment == 1}
                />
                <span className='payment-name'>
                  Credit Card
                </span>
              </div>
              <div className='icons'>
              {['visa', 'discover', 'maestro', 'mastercard'].map(item=>{
                return (
                  <picture key={item} className='payment-icon'>
                    <img src={`/images/${item}-logo.svg`} alt={item} />
                  </picture>
                )
              })}
              </div>
            </div>
            {selectedPayment == 1 && 
            <div className='inputs-container card-inputs'>
              {inputConfig.payment.map(input=>{
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
            }
          </div>
        </div>
      </section>
      <button type='submit'>SUBMIT</button>
    </form>
  )
}

