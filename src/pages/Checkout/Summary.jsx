import React from 'react'
import InputGroup from './InputGroup'

export default function Summary({amount, oldPrice, currentPrice, discount, selectedMethod, register, errors}) {

    let shippingPrice  = selectedMethod == 0 ? 4.99 : 9.00
    let total = amount*currentPrice + shippingPrice

    function dollar(value){
        return value.toLocaleString("en-US", {
            currency: "USD",
            style: "currency",
        })
    }

    return (
    <section className='info-block summary'>
        <h2>Summary</h2>
        <ul className="summary-list">
            <li>
                <span className='key'>Subtotal</span>
                <span className='value'>
                    {dollar(amount * oldPrice)}
                </span>
            </li>
            <li>
                <span className='key'>Discount</span>
                <span className='value'>
                    -{dollar((amount * oldPrice)/100*discount)}
                </span>
            </li>
            <li>
                <span className='key'>Shipping</span>
                <span className='value'>
                    {dollar(shippingPrice)}
                </span>
            </li>
            <li>
                <span className='key'>Tax</span>
                <span className='value'>
                    {dollar(0)}
                </span>
            </li>
        </ul>
        <div className='grand-total'>
            <span>Grand Total</span>
            <span>{dollar(total)}</span>
        </div>
        <div className='inputs-container'>
            <InputGroup
                id={'comment'}
                type={'text'}
                inputMask={null}
                placeholder={'Order comment'}
                errors={errors}
                register={register}
            />
            <div className="checkbox-group">
                <input 
                    type="checkbox"
                    {...register('terms')}
                    id='terms'
                />
                <label htmlFor='terms'>
                    Please check to acknowledge our <strong>Privacy & Terms Policy</strong>
                </label>
                {errors.terms && 
                <span className='warning'>
                    {errors.terms.message}
                </span>
                }
            </div>
            <button type='submit' className='submit-button'>
                <span>Pay</span>
                <span>{dollar(total)}</span>
            </button>
        </div>
    </section>
  )
}
