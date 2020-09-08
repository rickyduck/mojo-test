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
import PropTypes from 'prop-types';
import BuildingsHeader from '../../components/BuildingsHeader/BuildingsHeader';
import BuildingsGrid from '../../components/BuildingsGrid/BuildingsGrid';
import s from './Buildings.css';

export default function Buildings({ news }) {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <BuildingsHeader />
        <main className={s.mainContent}>
          <section className={s.buildings}>
            <BuildingsGrid />
          </section>
          <section className={s.map}>
            map
          </section>
        </main>
      </div>
    </div>
  );
}

Buildings.propTypes = {
  // news: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     link: PropTypes.string.isRequired,
  //     content: PropTypes.string,
  //   }),
  // ).isRequired,
};
