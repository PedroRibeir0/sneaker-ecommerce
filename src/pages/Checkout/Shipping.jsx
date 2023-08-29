import InputGroup from './InputGroup'

export default function Shipping({config, register, errors}) {
  return (
    <section className='info-block shipping'>
    <h2>shipping address</h2>
    <div className='inputs-container'>
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
  </section>
  )
}
