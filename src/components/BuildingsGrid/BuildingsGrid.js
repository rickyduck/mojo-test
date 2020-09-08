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
import s from './BuildingsGrid.css';
import BuildingsGridItem from '../BuildingsGridItem';
import gridIconUrl from './grid-icon.png';
import listIconUrl from './list-icon.png';

export default function BuildingsGrid() {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.buildingsGridHeader}>
              45 Buildings
              <menu className={s.layoutOptions}>
                <a href="#"><img src={listIconUrl} alt="List View" /></a>
                <span className={s.layoutOptionsDivider}></span>
                <a href="#"><img src={gridIconUrl} alt="Grid Icon" /></a>
              </menu>
            </div>

            <section className={s.buildingsGrid} role="main">
              <BuildingsGridItem />
              <BuildingsGridItem />
              <BuildingsGridItem />
              <BuildingsGridItem />
              <BuildingsGridItem />
              <BuildingsGridItem />
              <BuildingsGridItem />
              <BuildingsGridItem />
            </section>
    </div>
  );
}
