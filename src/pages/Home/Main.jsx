import Buttons from "./Buttons"


export default function Main({count, minus, plus, sendToCart, product}) {

  const {name, description, oldPrice, currentPrice, discount} = product

  return (
    <section className="main">
        <span className="brand">sneaker company</span>
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="prices">
          <div>
            <span className="current-price">${currentPrice.toFixed(2)}</span>
            <span className="discount">-{discount}%</span>
          </div>
          <span className="old-price">${oldPrice}</span>
        </div>
        <Buttons 
          count={count}
          minus={minus}
          plus={plus}
          sendToCart={sendToCart}
        />
    </section>
  )
}
