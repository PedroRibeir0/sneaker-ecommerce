import Buttons from "./Buttons"

export default function Main(props) {

  return (
    <section className="main">
        <span className="brand">sneaker company</span>
        <h2 className="product-name">Fall Limited Edition Sneakers</h2>
        <p className="product-descripition">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="prices">
            <div>
                <span className="current-price">$125.00</span>
                <span className="discount">50%</span>
            </div>
            <span className="old-price">$250.00</span>
        </div>
        <Buttons 
          amount={props.amount}
          minus={props.minus}
          plus={props.plus}
          sendToCart={props.sendToCart}
        />
    </section>
  )
}
