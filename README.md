
[React Starter Kit](https://www.reactstarterkit.com) is an opinionated boilerplate for web
development built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/), [GraphQL](http://graphql.org/) and
[React](https://facebook.github.io/react/), containing modern web development
tools such as [Webpack](http://webpack.github.io/), [Babel](http://babeljs.io/)
and [Browsersync](http://www.browsersync.io/). Helping you to stay productive
following the best practices. A solid starting point for both professionals
and newcomers to the industry.

See `server.js` for express, GraphQL & SSR bootstrapping.

See `routes/building/` for page level stuff including search/filters (`Buildings.js`) and graphql fetch,

See `components/` for composites

See `context/` for the context bootstrapping

See `data/` for querying the graphql 

`npm install` & `npm run start` to launch locally. 

I was going to take an atomic approach with styled components, and would have liked to include storybook for a more appropriate reflection of my UI pattern. I also would have liked to use cypress to test the React components in isolation & e2e. 

The GraphQL instance interacts with a static rest end point for more concise composition and seperation of concerns. 