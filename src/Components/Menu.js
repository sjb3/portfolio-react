'use strict';

import { Link } from 'react-router';
import MdRingVolume from 'react-icons/lib/md/ring-volume';
import TiHomeOutline from 'react-icons/lib/ti/home-outline';
import MdFingerprint from 'react-icons/lib/md/fingerprint';
import FaSearch from 'react-icons/lib/fa/search';
import MdImage from 'react-icons/lib/md/image';

import '../scss/base.scss';
import '../scss/lib/_theme.scss';

export const Menu = () => (
  <nav className='menu'>
    <Link to="/home" activeClassName="selected">
      <TiHomeOutline style={{fontSize: 30}}/>
      {/*<h3 style={{fontFamily: 'VT323', fontSize: 25}}>home</h3>*/}

    </Link>
    <Link to="/resume" activeClassName="selected">
      <MdFingerprint style={{fontSize: 30}}/>
      {/*<h3 style={{fontFamily: 'VT323', fontSize: 25}}>resume</h3>*/}
    </Link>
    <Link to="/contact" activeClassName="selected">
      <MdRingVolume style={{fontSize: 30}}/>
      {/*<h3 style={{fontFamily: 'VT323', fontSize: 25}}>contact</h3>*/}

    </Link>
    <Link to="/projects" activeClassName="selected">
      <FaSearch style={{fontSize: 30}}/>
      {/*<h3 style={{fontSize: 30}}>projects</h3>*/}

    </Link>
        <Link to="/gallery-list" activeClassName="selected">
      <MdImage style={{fontSize: 30}}/>
      {/*<h3 style={{fontFamily: 'VT323', fontSize: 25}}>home</h3>*/}

    </Link>
  </nav>
)