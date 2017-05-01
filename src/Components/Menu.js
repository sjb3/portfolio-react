'use strict';

import { Link } from 'react-router';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';

export const Menu = () => (
  <nav className='menu'>
    <Link to="/" activeClassName="selected">
    </Link>
    <Link to="/resume" activeClassName="selected">
    </Link>
    <Link to="">
    </Link>
  </nav>
)