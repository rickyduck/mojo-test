/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt, { UnauthorizedError as Jwt401Error } from 'express-jwt';
import { graphql } from 'graphql';
import expressGraphQL from 'express-graphql';
import jwt from 'jsonwebtoken';
import nodeFetch from 'node-fetch';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import createFetch from './createFetch';
import router from './router';
import schema from './data/schema';
// import assets from './asset-manifest.json'; // eslint-disable-line import/no-unresolved
import chunks from './chunk-manifest.json'; // eslint-disable-line import/no-unresolved
import config from './config';

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  // send entire app down. Process manager will restart it
  process.exit(1);
});

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const app = express();

//
// If you are using proxy from external machine, you can set TRUST_PROXY env
// Default is to trust proxy headers only from loopback interface.
// -----------------------------------------------------------------------------
app.set('trust proxy', config.trustProxy);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use(
  '/graphql',
  expressGraphQL(req => ({
    schema,
    graphiql: __DEV__,
    rootValue: { request: req },
    pretty: __DEV__,
  })),
);

app.get('/api/buildings', async(req, res) => {
  const buildings = {
    status: "ok",
    items: [
    {
      title: "Bauhaus Archive",
      address1: "7246 Woodland Rd.",
      address2: "Waukesha, WI 53186",
      users: "906 Users",
      offices: "36 Offices",
      price: "£75/sqm",
      image: "https://www.tripsavvy.com/thmb/Y5uS1XNXE0gedc7UdD-_dXG_Yyw=/5547x3759/filters:no_upscale():max_bytes(150000):strip_icc()/the-bauhaus-archive-which-was-the-last-building-designed-by-walter-gropius-before-his-death-in-1969-680781095-5acd66496bf06900382f539e.jpg",
      forRent: true,
      type: "Office",
    },
    {
      title: "Lotus Temple",
      address1: "164 S. Carson Court",
      address2: "Newport News, VA 23601",
      users: "876 Users",
      offices: "20 Offices",
      price: "£65/sqm",
      image: "https://cdn1.goibibo.com/t_tg_fs/new-delhi-lotus-temple-147624010756-orijgp.jpg",
      forRent: true,
      type: "Office",
    },
    {
      title: "Dome of the Rock",
      address1: "123 Johnson Court",
      address2: "Roy, UT 84067",
      users: "565 Users",
      offices: "46 Offices",
      price: "£96/sqm",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jerusalem-2013%282%29-Temple_Mount-Dome_of_the_Rock_%28SE_exposure%29.jpg/1200px-Jerusalem-2013%282%29-Temple_Mount-Dome_of_the_Rock_%28SE_exposure%29.jpg",
      forRent: true,
      type: "Flat",
    },
    {
      title: "Lloyd's Building",
      address1: "36 Squaw Creek Dr. ",
      address2: "Harleysville, PA 19438",
      users: "466 Users",
      offices: "120 Offices",
      price: "120/sqm",
      image: "https://cdn.images.express.co.uk/img/dynamic/22/590x/lloyds-432429.jpg",
      forRent: true,
      type: "House",
    },
    {
      title: "Bauhaus Archive",
      address1: "7246 Woodland Rd.",
      address2: "Waukesha, WI 53186",
      users: "906 Users",
      offices: "36 Offices",
      price: "£75/sqm",
      image: "https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078",
      forRent: true,
      type: "Flat",
    },
    {
      title: "Bauhaus Archive",
      address1: "7246 Woodland Rd.",
      address2: "Waukesha, WI 53186",
      users: "906 Users",
      offices: "36 Offices",
      price: "£75/sqm",
      image: "https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078",
      forRent: true,
      type: "House",
    },
  ]};
  res.send(JSON.stringify(buildings));
});
//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const css = new Set();

    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    const insertCss = (...styles) => {
      // eslint-disable-next-line no-underscore-dangle
      styles.forEach(style => css.add(style._getCss()));
    };

    // Universal HTTP client
    const fetch = createFetch(nodeFetch, {
      baseUrl: config.api.serverUrl,
      cookie: req.headers.cookie,
      schema,
      graphql,
    });

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      fetch,
      // The twins below are wild, be careful!
      pathname: req.path,
      query: req.query,
    };

    const route = await router.resolve(context);

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    data.children = ReactDOM.renderToString(
      <App context={context} insertCss={insertCss}>
        {route.component}
      </App>,
    );
    data.styles = [{ id: 'css', cssText: [...css].join('') }];

    const scripts = new Set();
    const addChunk = chunk => {
      if (chunks[chunk]) {
        chunks[chunk].forEach(asset => scripts.add(asset));
      } else if (__DEV__) {
        throw new Error(`Chunk with name '${chunk}' cannot be found`);
      }
    };
    addChunk('client');
    if (route.chunk) addChunk(route.chunk);
    if (route.chunks) route.chunks.forEach(addChunk);

    data.scripts = Array.from(scripts);
    data.app = {
      apiUrl: config.api.clientUrl,
    };

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
    app.listen(config.port, () => {
      console.info(`The server is running at http://localhost:${config.port}/`);
    });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

export default app;
