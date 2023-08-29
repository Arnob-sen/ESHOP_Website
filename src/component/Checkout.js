import React from "react";
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct";
const Checkout=()=>{
    return(
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2>
                    <CheckoutProduct/>
                </div>
            </div>
        </div>
      

    )
}
export default Checkout;