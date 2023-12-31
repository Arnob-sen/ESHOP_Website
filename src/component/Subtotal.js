import React from "react";
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
const Subtotal =()=>{
    const [{basket},dispatch]=useStateValue();
    return(
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>

                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />This order contains a gift
                </small>
               
                </>
            )}
            decimalScale={2}
            prefix={"$"}
            value={getBasketTotal(basket)}
            thousandSeparator={true}
            displayType="text"
/>
<button>Proceed to Checkout</button>

        </div>
    )
}
export default Subtotal;