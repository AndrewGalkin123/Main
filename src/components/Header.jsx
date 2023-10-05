import React from 'react';
import {styles} from "/Casino/casino/src/styles"
import logo from "./logo.png"

const Header = () => {
  return (
    <header style={styles.Header}>
      <img style={styles.Logo} src={logo}></img>
      <nav>
        <ul>
          <li style={styles.Navigation}></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
