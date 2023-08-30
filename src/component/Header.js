import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header=()=>{
  const [{basket},dispatch]=useStateValue();
    return(
        <div className="header">
          <Link to='/' style={{textDecoration:"none"}}>
                        <div className="header__logo">
        <LocalGroceryStoreIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      </Link>


      <div className="header__search">
        <input type="text" placeholder="Search..." className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon"/>
      </div>
    <div className="header__nav">
      <div className="nav__item">
        <span className="nav__itemLineOne"> Hello Guest</span>
        <span className="nav__itemLineTwo">SIGN IN</span>
      </div>
        <div className="nav__item">
      <span className="nav__itemLineOne">YOUR</span>
        <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to='/checkout' style={{textDecoration:"none"       
        }}>
          <div className="nav__itemBasket">
          <ShoppingBasketIcon  className="nav__item" fontSize="large"/>
        <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
          </Link>
      </div>      
    

        </div>

    )
}
export default Header