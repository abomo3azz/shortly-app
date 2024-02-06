import React from "react";
import { Link , NavLink} from "react-router-dom";
function Header() {
  return (
      <header>
        <div className="container">
          <nav className="nav">
            <div className="nav__brand">
              <Link to="/">
                <img src="./images/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="nav__toggle toggle">
              <input type="checkbox" id="nav-icon" />
              <div className="toggle__btn">
                <label htmlFor="nav-icon" className="toggle__btn--icon">
                  <span />
                  <span />
                  <span />
                </label>
              </div>
              <div className="toggle__box">
                <ul className="nav__navbar">
                  <li>
                    <NavLink to="/Features"> Features </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Pricing"> Pricing </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Resources"> Resources </NavLink>
                  </li>
                </ul>
                <div className="nav__cta">
                  <Link to="#"> Login </Link>
                  <Link to="#" className="btn btn--rounded">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
  );
}

export default Header;
