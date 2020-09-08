import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import s from './BuildingsGridItem.css';

import usersIconUrl from './users-icon.png';
import officesIconUrl from './offices-icon.png';

export default function BuildingsGridItem() {
  useStyles(s);
  return (
    <figure className={s.buildingsGridItem}>
                <div className={s.buildingsGridItemImage}></div>
                <figcaption>
                  <h6>Bauhaus Archive</h6>
                  <p>7246 Woodland Rd<br />
                  Waukesha, WI 53186

                  </p>
                  <div className={s.usersOfficeInfo}>
                    <span>
                      <img src={usersIconUrl} />
                      906 Users
                    </span>
                    <span>
                    <img src={officesIconUrl} />
                    36 Offices
                    </span>
                  </div>
                  <div className={s.rateInfo}>
                    <span>For Rent</span>
                    <span>£75/sqm</span>
                  </div>
                </figcaption>
              </figure>
  );
}
