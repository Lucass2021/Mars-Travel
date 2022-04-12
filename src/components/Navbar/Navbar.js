import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  //Active or disable burguer-button (fa-bars)
  state = { clicked: false };

  handleClick = () => {
    //Set clicked to the opposite value every time it's clicked
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Mars Travel <FontAwesomeIcon icon={faRocket} />
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          {/* If the button its clicked, then the class is fa-times, else (not clicked)
            is fa-bars, this is online availabe on mobile */}
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
