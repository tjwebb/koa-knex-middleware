koa-knex-middleware
===================

[![NPM version][npm-image]][npm-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Knex.js Middleware for Koa. Package is versioned in step with <http://knexjs.org/#changelog>

### 0. Installation (via [npm](https://npmjs.org/package/koa-knex))

```bash
  $ npm install koa-knex --save
```

### 1. Usage (contrived example)

```javascript

  var _ = require('koa-route');
  var knex = require('koa-knex');
  ...
  app.use(knex({
    client: 'pg',
    connection: {
      /** typical knex connection object */
    }
  });

  app.use(_.get('/:userid', function *(userid) {
    this.body = {
      profile: yield this.knex('users').where('id', userid);
    };
  });

```

### 2. Options

The following environment variables will be automatically used for the Knex.js connection object if set:
```
  KOA_KNEX_HOST
  KOA_KNEX_PORT
  KOA_KNEX_USER
  KOA_KNEX_PASSWORD
  KOA_KNEX_DATABASE
  KOA_KNEX_CHARSET
  KOA_KNEX_SSL
  KOA_KNEX_DEBUG
```

### License

[MIT](http://www.opensource.org/licenses/mit-license.php)

[npm-image]: https://img.shields.io/npm/v/koa-knex.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-knex
[daviddm-image]: http://img.shields.io/david/tjwebb/koa-knex-middleware.svg?style=flat-square
[daviddm-url]: https://david-dm.org/tjwebb/koa-knex-middleware
