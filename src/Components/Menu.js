'use strict';

import { Link } from 'react-router';
import MdRingVolume from 'react-icons/lib/md/ring-volume';
import TiHomeOutline from 'react-icons/lib/ti/home-outline';
import MdFingerprint from 'react-icons/lib/md/fingerprint';


export const Menu = () => (
  <nav className='menu'>
    <Link to="/home" activeClassName="selected">
      <TiHomeOutline style={{fontSize: 30}}/>
    </Link>
    <Link to="/resume" activeClassName="selected">
      <MdFingerprint style={{fontSize: 30}}/>
    </Link>
    <Link to="/contact" activeClassName="selected">
      <MdRingVolume style={{fontSize: 30}}/>
    </Link>
  </nav>
)