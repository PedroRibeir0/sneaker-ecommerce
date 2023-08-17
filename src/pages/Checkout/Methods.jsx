import { useState } from "react"

export default function Method() {

    const [selected, setSelected] = useState(-1)
    const faster = 1

    const methodsInfo = [
        {   
            name: 'USPS 1st Class With Tracking',
            price: 4.99,
            minDays: 5,
            maxDays: 13,
            id: 0,
            img: ''
        },
        {
            name: 'USPS PRIORITY With Tracking',
            price: 9,
            minDays: 5,
            maxDays: 10,
            id: 1,
            img: ''
        },
    ]



    return (
    <div className="methods">
        {methodsInfo.map(item=>{
            return(
            <div 
            className={`method ${item.id == selected && 'selected'}`}
            onClick={e=>setSelected(item.id)}
            >
                <input 
                type="radio" 
                name="method" 
                onChange={e=>setSelected(item.id)}
                checked={item.id==selected}
                />
                <span className="method-price">
                    ${item.price.toFixed(2)}
                </span>
                <span className="method-description">
                    {item.name}
                    {` (${item.minDays} - ${item.maxDays} ) COVID 19 Delay`}
                </span>
                <picture className="method-img">
                    <img 
                    src="/images/ship-method.svg" 
                    alt="ship-method" 
                    />
                    {item.id == faster && <span>faster</span>}
                </picture>
            </div>
            )
        })}
    </div>
  )
}
