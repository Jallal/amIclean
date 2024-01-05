// @flow

import { bgcolor } from '@mui/system';
import React from 'react';

function Header({text,bgCoulor, textColor})
  {

const headerStyles = {
backgroundColor: bgcolor,
color : textColor,
}

return (
<header style = {headerStyles}>
  <div className='container'>
    <h2>{text}</h2>
    </div>
  </header>
)
  }

export default Header;