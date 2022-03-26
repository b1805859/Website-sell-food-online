import React from "react";

import Telephone from "../assets/img/telephone.png";
import Logo from "../assets/img/logo.png";
import Cart from "../assets/img/cart.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <div className="header__left__callButton">
            <img src={Telephone} alt="" />
          </div>
          <div className="header__left__text">
            <div className="text">ODER NOW!</div>
            <div className="text">0123 456 789</div>
          </div>
        </div>
        <div className="header__center">
          <ul className="header__center__list">
            <li className="header__center__list__item">Homepage</li>
            <li className="header__center__list__item">Products</li>
            <li className="header__center__list__item">Menu</li>
            <div className="header__center__list__logo">
              <img src={Logo} alt="" />
            </div>
            <li className="header__center__list__item">Events</li>
            <li className="header__center__list__item">Blog</li>
            <li className="header__center__list__item">Contact</li>
          </ul>
        </div>
        <div className="header__right">
          <div className="header__right__cart">
            <img src={Cart} alt="" />
          </div>
          <div className="header__right__counter">2</div>
          <div className="header__right__login">
          <i class="fal fa-user-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
