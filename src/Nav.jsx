import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pawState: false };
  }
  close = () => {
    this.setState({ pawState: false });
  };
  render() {
    const menuState = this.state.pawState ? "navOpen" : "navClosed ";
    return (
      <Navbar className='navbar'>
        <img
          onClick={() => this.setState({ pawState: !this.state.pawState })}
          className={this.state.pawState ? "paw pawOpen" : "paw pawClosed"}
          src='imgs/paw.png'
          alt='paw'
        />
        <div>
          <Link onClick={this.close} className={menuState} to='/'>
            Home
          </Link>
          <Link onClick={this.close} className={menuState} to='/portions'>
            Porciones
          </Link>
          <a className={menuState} href='/menus2.pdf'>
            PDF
          </a>
          <Link onClick={this.close} className={menuState} to='/create'>
            Create
          </Link>
        </div>
      </Navbar>
    );
  }
}

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(255, 199, 208);
  z-index: 999;
  img {
    height: 20px;
    width: auto;
  }
  .navOpen,
  .navOpen a {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    flex-direction: column;
    padding: 1rem 0;
    width: 100%;
  }
  .navClosed {
    display: none;
  }

  .paw {
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .pawOpen {
    transform: rotate(180deg);
  }
  .pawClosed {
    transform: rotate(0deg);
  }
`;

export default Nav;
