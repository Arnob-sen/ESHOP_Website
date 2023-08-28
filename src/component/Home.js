import React from "react";
import "./Home.css";
import ecommerce from './ecommerce.webp'

const Home=()=>{
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src={ecommerce} alt="pic of ecommerce" className="home__image" />
                </div>
            </div>
        </div>
    )
}
export default Home;