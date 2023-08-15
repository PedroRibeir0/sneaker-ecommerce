import {BsTrash3Fill} from 'react-icons/bs'

export default function Cart({amount, trash, price}) {
    
    function Item(){
        return(
            <div className="item">
            <img className="item-thumbnail" src="images/image-product-1-thumbnail.jpg" alt="" />
            <div className="item-info">
                <span className="item-name">Fall Limited Edition Sneakers</span>
                <div className="item-prices">
                    <span className="item-unity-price">${price}</span>
                    <span className="item-amount">x{amount}</span>
                    <span className="full-price">${(amount*price)}</span>
                </div>
            </div>
            <BsTrash3Fill onClick={trash} className='trash-icon'/>
        </div>
        )
    }

    return (
    <div className="cart-container">
        <span className='cart-txt'>Cart</span>
        {amount > 0 ? <Item/> : <span className='no-items'>Your cart is empty</span>}
        {amount > 0 && <button className='checkout-button'>Checkout</button>}
    </div>
  )
}
