import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import UserContext from "./UserContext";
import { useContext } from "react";

const Header = () => {

  const [ btnName, setBtnName] = useState('login');
  const onlineStatus = useOnlineStatus();
  const {userName} = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <h1 id="logo">Namaste Biriyani</h1>
      </div>
      <div className="nav-items">
        <ul className="nav-ul">
          <li>Online status: {onlineStatus===true ? '🟢' : '🔴'}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to={'/grocery'}>Grocery</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
          <button id="login-btn" 
          onClick={()=> {
            btnName === "login" ? setBtnName('logout') : setBtnName("login");
          }}
          >{btnName}</button>
          </li>
          <li>{userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
