import React from "react";
import "./Home.css";
import Product from "./Product";
import ecommerce from './ecommerce.webp'

const Home=()=>{
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src={ecommerce} alt="pic of ecommerce" className="home__image" />
                    <div className="home__row">
                        <Product/>
                        <Product/>

                    </div>
                    <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                    </div>
                    <div className="home__row">
                    <Product/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;