/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import { useContext } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import BuildingType from '../../types/Building';

import { BuildingsContext, BuildingsContextProvider } from "../../context/BuildingsContext";
import Buildings from './Buildings';

export default function BuildingsContainer({ buildings }) {
  

  return (
    <BuildingsContextProvider>
      <Buildings buildings={buildings} />
    </BuildingsContextProvider>
  );
}

Buildings.propTypes = {
  buildings: PropTypes.arrayOf(
    BuildingType
  ).isRequired,
};
