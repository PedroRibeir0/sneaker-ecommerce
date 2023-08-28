import { AiFillLock } from 'react-icons/ai'

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
              {config.map(input=>{
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
