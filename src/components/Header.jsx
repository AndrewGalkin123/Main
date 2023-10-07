import React, { useState } from 'react';
import { styles } from "/Casino/casino/src/styles"
import logo from "./logo.png"
import chip from "./chip.png"

const Header = ({ chips = 1000}) => {
  return (
    <header style={styles.Header}>
      <img alt="logo" style={styles.Logo} src={logo}></img>
      <p style={styles.ChipsAmount}>Ваши фишки: {chips}</p><img alt="chip" style={styles.Chip} src={chip}/>
    </header>
  )
}

export default Header;
