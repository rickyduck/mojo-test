/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import BuildingsContainer from './BuildingsContainer';
import Layout from '../../components/Layout';


async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{buildings{title,address1,address2,users,offices,price,forRent,image, type}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.buildings) throw new Error('Failed to load the news feed.');
  return {
    title: 'React Starter Kit',
    chunks: ['buildings'],
    component: (
      <Layout>
        <BuildingsContainer buildings={data.buildings} />
      </Layout>
    ),
  };
}

export default action;
