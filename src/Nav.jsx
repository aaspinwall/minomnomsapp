import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pawState: false };
  }
  render() {
    const menuState = this.state.pawState ? "navOpen" : "navClosed ";
    return (
      <nav className='navbar'>
        <img
          onClick={() => this.setState({ pawState: !this.state.pawState })}
          className={this.state.pawState ? "paw pawOpen" : "paw pawClosed"}
          src='imgs/paw.png'
          alt='paw'
        />
        <div>
          <Link className={menuState} to='/'>
            Home
          </Link>
          <Link className={menuState} to='/portions'>
            Porciones
          </Link>

          <a className={menuState} href='/menus.pdf'>
            PDF
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
