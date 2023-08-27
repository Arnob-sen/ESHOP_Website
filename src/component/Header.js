import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';

const Header=()=>{
    return(
        <div className="header">
              <div className="header__logo">
        <LocalGroceryStoreIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>

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
          <div className="nav__item">
          <ShoppingBasketIcon  className="itemBasket" fontSize="large"/>
        <span className="nav__itemLineTwo nav__basketCount">0</span>
          </div>
      </div>      
    

        </div>

    )
}
export default Header