/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLBoolean as Boolean,
  GraphQLNonNull as NonNull,
} from 'graphql';

const BuildingsItemType = new ObjectType({
  name: 'BuildingsItem',
  fields: {
    title: { type: new NonNull(StringType) },
    address1: { type: new NonNull(StringType) },
    address2: { type: new NonNull(StringType) },
    users: { type: new NonNull(StringType) },
    offices: { type: new NonNull(StringType) },
    price:  { type: new NonNull(StringType) },
    image: { type: new NonNull(StringType) },
    forRent: { type: Boolean },
  },
});

export default BuildingsItemType;
