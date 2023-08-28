import React from "react";
import "./Home.css";
import Product from "./Product";
import ecommerce from './ecommerce.webp'
import bag from './bag.jpg'
import wallet from './wallet.jpg'
import phone from './phone.jpg'
import earbuds from './earbud.jpg'
import headphone from './headphone.jpg'
import tv from './tv.jpg'
const Home=()=>{
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src={ecommerce} alt="pic of ecommerce" className="home__image" />
                    <div className="home__row">
                        <Product
                        id='1'
                        title="black bag"
                        price={20}
                        image={bag}
                        rating={3}
                        />
                        <Product
                        id='2'
                        title="wallet"
                        price={10}
                        image={wallet}
                        rating={4}
                        />

                    </div>
                    <div className="home__row">
                    <Product
                    id='3'
                    title="smartPhone"
                    price={598}
                    image={phone}
                    rating={3}
                    
                    />
                    <Product
                    id='4'
                    title="earbud"
                    price={37}
                    image = {earbuds}
                    rating={5}
                    />
                    <Product
                    id ='5'
                    title= 'Headphones'
                    price={69}
                    image ={headphone}
                    rating={4}
                    />
                    </div>
                    <div className="home__row">
                    <Product
                    id ="6"
                    title="TV"
                    price={ 129 }
                    image = {tv}
                    rating={3}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;