/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import s from './Sidebar.css';
import Link from '../Link';

import hamburgerIcon from './hamburger-icon.png';


export default function Sidebar({children}) {
  useStyles(s);
  const [displaySidebar, setDisplaySidebar] = React.useState(false);
  return (
    <div className={s.topContainer}>
      <a href="#" onClick={() => setDisplaySidebar(!displaySidebar)} className={s.showSidebar}>
        <img src={hamburgerIcon} width="25px" />
      </a>
    <aside className={`${s.root} ${displaySidebar && s.visible}`} role="sidebar">
      <header className={s.header}>
        Buildings
        <a href="#" onClick={() => setDisplaySidebar(false)}>X</a>
      </header>
      <section role="main" className={s.container}>
        <h5 className={s.heading5}>Menu</h5>
        <nav className={s.nav} role="navigation">
          <Link className={s.link} to={'/'}>Dashboard</Link>
          <Link className={s.link} to={'/buildings'}>Buildings</Link>
          <Link className={s.link} to={'/'}>Posts</Link>
          <Link className={s.link} to={'/'}>Conversations <span className={s.counter}>2</span></Link>
          <Link className={s.link} to={'/'}>Amenities</Link>
          <Link className={s.link} to={'/'}>Tenants</Link>
        </nav>
        <div className={s.divider}></div>
        <h5 className={s.heading5}>Support</h5>
        <nav className={s.nav} role="navigation">
          <Link className={s.link} to={'/'}>Need Help?</Link>
          <Link className={s.link} to={'/'}>Contact Us</Link>
          <Link className={s.link} to={'/'}>Knowledge Base</Link>
        </nav>

      </section>
      
    </aside>
    </div>
  );
}
