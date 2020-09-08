/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { BuildingsContext } from "../../context/BuildingsContext";

import React from 'react';
import s from './BuildingsHeader.css';
// import Link from '../Link';
// import logoUrl from './logo-small.png';
// import logoUrl2x from './logo-small@2x.png';

export default function BuildingsHeader({ buildingTypes }) {
  const { buildingSettings, setBuildingSettings, onSearch, onFilter } = useContext(BuildingsContext);
  useStyles(s);
  return (
    <header className={s.root}>
      <div className={s.container}>
          <section className={s.buildingTypes}>
            <ul className={s.buildingTypesGrid}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <select className={s.textHolder} onChange={onFilter}>
              <option value="">All Buildings</option>
              {
                buildingTypes.map((buildingType) => <option value={buildingType}>{buildingType}</option>)
              }
            </select>
          </section>
          <section className={s.rightSection}>
            <input onKeyUp={onSearch} placeholder="Type to search..." className={s.search} type="text" />
            <div className={s.divider}></div>
            <div className={s.languageSelect}>
              English
            </div>
          </section>
      </div>
    </header>
  );
}

BuildingsHeader.propTypes = {
  buildingTypes: PropTypes.array.isRequired,
};