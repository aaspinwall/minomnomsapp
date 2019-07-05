import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Search = styled.input`
  position: absolute;
  width: 90%;
  top: 14px;
  left: 60px;
  height: 22px;
  background: transparent;
  padding: 3px;

  @media screen and (min-width: 1024px) {
    width: 88%;
  }
  @media screen and (min-width: 765px) {
    width: 88%;
  }

  @media screen and (max-width: 362px) {
    width: 72%;
  }
`;

const initialSearch = "Search... Doesn't work for now";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pawState: false, search: initialSearch };
  }
  close = () => {
    this.setState({ pawState: false });
  };
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
        <Search
          key='searchBox'
          value={this.state.search}
          onClick={() =>
            this.setState({
              search:
                this.state.search === initialSearch ? "" : this.state.search,
            })
          }
          onChange={e => this.setState({ search: e.target.value })}
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
        </div>
      </nav>
    );
  }
}

export default Nav;
