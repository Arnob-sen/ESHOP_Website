import React from "react";
import './Checkout.css';
import bag from './bag.jpg'
import Subtotal from "./Subtotal";
import './CheckoutProduct.css';

const CheckoutProduct =({id,title,price,image,rating})=>{
    return(
        <div className='checkoutProduct'>
            <div className="checkoutProduct__left">
            <img src={bag} alt="" className="checkoutProduct__image" />
            <div className='checkoutProduct__info'>
                <p className="checkoutProduct__title">
                    Bag
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">

                </div>
                <button >remove from basket</button>
            </div>
            </div>
            <div className="checkoutProduct__right">
                <Subtotal/>
            </div>

        </div>
    )
}
export default CheckoutProduct;