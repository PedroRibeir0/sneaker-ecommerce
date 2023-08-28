import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function OrderReview({name, amount, setAmount, oldPrice, currentPrice}) {
  return (
    <section className='info-block order-review'>
        <h2>Order Review</h2>
        <div className='order'>
        <picture>
            <img src="/images/image-product-1-thumbnail.jpg" alt="" />
        </picture>
        <div className='name-buttons'>
            <span className='name'>{name}</span>
            <div className="buttons">
            <button type='button' onClick={(e)=>{
                if (amount <= 1) return
                setAmount(amount - 1)
            }}>
                <AiOutlineMinus/>
            </button>
            <span>{amount}</span>
            <button type='button' onClick={(e)=>{
                if (amount >= 10) return
                setAmount(amount + 1)
            }}>
                <AiOutlinePlus/>
            </button>
            </div>
        </div>
        <div className="price">
            <div className='price'>
            <span className='old-price'>
                {(amount * oldPrice).toLocaleString("en-US", {
                currency: "USD",
                style: "currency",
                })}
            </span>
            <span className='current-price'>
                {(amount * currentPrice).toLocaleString("en-US", {
                currency: "USD",
                style: "currency",
                })}
            </span>
            </div>
        </div>
    </div>
  </section>
  )
}
