import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
  // if (onlineStatus == false)
  //   return (
  //     <div className="online-status">
  //       <h2>Something went wrong. Please check your internet connetion !!!!</h2>
  //     </div>
  //   );

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="logo.png" alt="DishOfDisha Logo" className="logo-img" />
      </div>
      <div className="nav-container">
        <nav className="nav-links">
          <ul>
            <li>Online Status {onlineStatus ? "✅" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              {/* <a href="#Login" >Login</a> */}
              <i className="fas fa-user"></i>
              <button
                className="btn-login-logout"
                onClick={() => {
                  btnName == "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
            </li>
            <li>
              <a href="#cart">
                <i className="fas fa-shopping-cart">
                  <span></span>
                </i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
