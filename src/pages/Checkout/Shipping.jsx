import { mask } from 'remask'

export default function Shipping({config, register, errors}) {
  return (
    <section className='info-block'>
    <h2>shipping address</h2>
    <div className='inputs-container'>
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
  </section>
  )
}
