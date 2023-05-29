import {BsTrash3Fill} from 'react-icons/bs'

export default function Cart(props) {

    const itemPrice = 125

    function Item(){
        return(
            <div className="item">
            <img className="item-thumbnail" src="../src/assets/images/image-product-1-thumbnail.jpg" alt="" />
            <div className="item-info">
                <span className="item-name">Fall Limited Edition Sneakers</span>
                <div className="item-prices">
                    <span className="item-unity-price">${itemPrice.toFixed(2)}</span>
                    <span className="item-amount">x{props.amount}</span>
                    <span className="full-price">${(props.amount*itemPrice).toFixed(2)}</span>
                </div>
            </div>
            <BsTrash3Fill onClick={props.trash} className='trash-icon'/>
        </div>
        )
    }

    return (
    <div className="cart-container">
        <span className='cart-txt'>Cart</span>
        {props.amount > 0 ? <Item/> : <span className='no-items'>Your cart is empty</span>}
        {props.amount > 0 && <button className='checkout-button'>Checkout</button>}
    </div>
  )
}
