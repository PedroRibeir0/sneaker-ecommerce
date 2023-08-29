import { AiFillLock } from 'react-icons/ai'
import InputGroup from './InputGroup'

export default function Payment({config, register, errors, selectedPayment, setSelectedPayment}) {
  return (
    <section className="info-block payment">
        <h2>Payment Method</h2>
        <div className="radios-container">
          <div 
            className={`paypal ${selectedPayment == 0 && 'selected'}`}
            onClick={e=>{
              setSelectedPayment(0)
            }}>
            <div className="input-name">
              <input
              type="radio"
              value={'paypal'}
              {...register('paymentRadio')}
              checked={selectedPayment == 0}
              />
              <span className='payment-name'>Paypal</span>
            </div>
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
              {config.map(input=>{
                return(
                  <InputGroup
                    id={input.id}
                    type={input.type}
                    inputMask={input?.mask}
                    placeholder={input.placeholder}
                    errors={errors}
                    register={register}
                />
                )
              })}
            </div>
            }
          </div>
          <div className="safe">
            <AiFillLock className='lock-icon'/>
            <span>
              We protect your payment information using encryption to provide bank-level security. 
            </span>
          </div>
        </div>
    </section>
  )
}
