import React from "react";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pawState: false };
  }
  render() {
    return (
      <nav className='navbar'>
        <img
          onClick={() => this.setState({ pawState: !this.state.pawState })}
          className={this.state.pawState ? "paw pawOpen" : "paw pawClosed"}
          src='imgs/paw.png'
          alt='paw'
        />
        <div>
          <a
            className={this.state.pawState ? "navOpen" : "navClosed "}
            href='/menus.pdf'
          >
            PDF
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
