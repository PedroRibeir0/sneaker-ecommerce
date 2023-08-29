import { mask } from 'remask'

export default function InputGroup({id, type, inputMask, register, errors, placeholder}) {
  return (
    <div className="input-group" key={id}>
        <input
            type={type} 
            {...register(id)}
            onChange={e=>{
            if (inputMask){
                e.target.value = mask(e.target.value, [inputMask])
            }
            }}
        />
        <span className='placeholder'>{placeholder}</span>
        {errors[id] && 
        <span className='warning'>
            {errors[id].message}
        </span>}
    </div>
  )
}
