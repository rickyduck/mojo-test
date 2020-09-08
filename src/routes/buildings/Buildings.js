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
import { GoogleMap, Marker } from "react-google-maps";

import { BuildingsContext, BuildingsContextProvider } from "../../context/BuildingsContext";

import BuildingsHeader from '../../components/BuildingsHeader/BuildingsHeader';
import BuildingsGrid from '../../components/BuildingsGrid';
import BuildingsMap from '../../components/BuildingsMap';
import BuildingType from '../../types/Building';
import s from './Buildings.css';

if (!String.prototype.includes) {
  String.prototype.includes = function() {
    'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}
export default function Buildings({ buildings }) {
  useStyles(s);
  const { buildingsSettings } = useContext(BuildingsContext);
  var buildingsList = buildings; 
  if(buildingsSettings && (buildingsSettings.search || buildingsSettings.filter !== "all")) {
    buildingsList = buildings.filter( building => {
      let doReturn = false;
      for (let key in building){
        if(building.hasOwnProperty(key) && typeof building[key] === "string"){
          if(building[key].includes(buildingsSettings.search)) {
            doReturn = true;
          }
          debugger;
          if(buildingsSettings.filter && buildingsSettings.filter !== "all" && building.type !== buildingsSettings.filter) {
            doReturn = false;
          } 
        }
     }
     
     return doReturn;
    });
  }
  const buildingTypes = [];

  buildings.forEach((building) => {
    if(!buildingTypes.includes(building.type)) buildingTypes.push(building.type);
  });

  return (
    <div className={s.root}>
      <div className={s.container}>
        <BuildingsHeader buildingTypes={buildingTypes.flat()} />
        <main className={s.mainContent}>
          <section className={s.buildings}>
            <BuildingsGrid buildings={buildingsList} />
          </section>
          <section className={s.map}>
            <BuildingsMap isMarkerShown googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `100%` }}/>} containerElement={<div style={{ height: `100%` }} />} mapElement={<div style={{ height: `100%` }} />} />
          </section>
        </main>
      </div>
    </div>
  );
}

Buildings.propTypes = {
  buildings: PropTypes.arrayOf(
    BuildingType
  ).isRequired,
};
