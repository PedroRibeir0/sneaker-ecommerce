
export default function Methods({config, register, errors, selectedMethod, setSelectedMethod}) {
  return (
    <section className='info-block ship-methods'>
          <h2>Shipping Method</h2>
          <div className='radios-container'>
            {config.map((method, index)=>{
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
  )
}
