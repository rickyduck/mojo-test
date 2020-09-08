import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import s from './BuildingsGridItem.css';
import PropTypes from 'prop-types';
import BuildingType from '../../types/Building';

import usersIconUrl from './users-icon.png';
import officesIconUrl from './offices-icon.png';

export default function BuildingsGridItem({building}) {
  useStyles(s);
  return (
    <figure className={s.buildingsGridItem}>
                <div 
                className={s.buildingsGridItemImage} 
                style={{backgroundImage: `url('${building.image}')`}}></div>
                
                <figcaption>
                  <h6>{building.title}</h6>
                  <p>{building.address1}<br />
                  {building.address1}

                  </p>
                  <div className={s.usersOfficeInfo}>
                    <span>
                      <img src={usersIconUrl} />
                      {building.users}
                    </span>
                    <span>
                    <img src={officesIconUrl} />
                    {building.offices}
                    </span>
                  </div>
                  <div className={s.rateInfo}>
                    <span>{ building.forRent ? 'For Rent' : 'Not For Rent' }</span>
                    <span>{building.price}</span>
                  </div>
                </figcaption>
              </figure>
  );
}

BuildingsGridItem.propTypes = { building: BuildingType };