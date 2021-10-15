import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import styled from "styled-components"

const initialSearch = "Search... Doesn't work for now"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pawState: false, search: initialSearch }
  }
  close = () => {
    this.setState({ pawState: false })
  }
  render() {
    const menuState = this.state.pawState ? "navOpen" : "navClosed "
    return (
      <nav className='navbar'>
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
          <a onClick={this.close} className={menuState} href='/equivalentes.pdf'>
            Equivalentes
          </a>
        </div>
      </nav>
    )
  }
}

export default Nav
