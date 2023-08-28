import React from "react";
import './Product.css';
import bag from './bag.jpg';
const Product = () => {
    return(
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Tittle</p>
                    <p className="product__price">$30</p>
                    <div className="product__rating">
                        ⭐⭐
                    

                    </div>

                </div>
                <img src={bag} alt="" />
                <button>Add to basket</button>

            </div>
        </div>
    )
}
export default Product;