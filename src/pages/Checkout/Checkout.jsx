import '../../css/checkout/checkout.css'
import { useState, useEffect} from 'react'
import { useOutletContext } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import inputConfig from './inputConfig'
import schema from './schema'
import Product from '../../components/Product'
import Shipping from './Shipping'
import Methods from './Methods'
import Payment from './Payment'
import OrderReview from './OrderReview'
import Summary from './Summary'

export default function Checkout() {

  // useEffect(()=> setFocus('firstName'), [])

  const {currentPrice, name, oldPrice, discount} = Product
  const [amount, setAmount] = useOutletContext()
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
      <Shipping
        config={inputConfig.shipping}
        register={register}
        errors={errors}
      />
      <Methods
        config={inputConfig.shipMethods}
        register={register}
        errors={errors}
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
      <Payment
        config={inputConfig.payment}
        register={register}
        errors={errors}
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
      />
      <OrderReview
        name={name}
        amount={amount}
        setAmount={setAmount}
        oldPrice={oldPrice}
        currentPrice={currentPrice}
      />
      <Summary
        amount={amount}
        discount={discount}
        oldPrice={oldPrice}
        currentPrice={currentPrice}
        selectedMethod={selectedMethod}
        register={register}
        errors={errors}
      />
      <button type='submit'>SUBMIT</button>
    </form>
  )
}

