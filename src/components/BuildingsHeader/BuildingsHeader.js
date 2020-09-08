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
import s from './BuildingsHeader.css';
// import Link from '../Link';
// import logoUrl from './logo-small.png';
// import logoUrl2x from './logo-small@2x.png';

export default function BuildingsHeader() {
  useStyles(s);
  return (
    <header className={s.root}>
      <div className={s.container}>
          <section className={s.buildingTypes}>
            <ul className={s.buildingTypesGrid}>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
            </ul>
            <div className={s.textHolder}>All Buildings</div>
          </section>
          <section className={s.rightSection}>
            <input placeholder="Type to search..." className={s.search} type="text" />
            <div className={s.divider}></div>
            <div className={s.languageSelect}>
              English
            </div>
          </section>
      </div>
    </header>
  );
}
