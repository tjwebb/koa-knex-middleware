koa-knex-middleware
===================

Knex.js Middleware for Koa

### 0. Installation (via [npm](https://npmjs.org/package/koa-knex-middleware))

```bash
  $ npm install koa-knex-middleware --save
```

### 1. Usage (contrived example)

```javascript

  var _ = require('koa-route');
  var knex = require('koa-knex-middleware');
  ...
  app.use(knex({
    client: 'pg',
    connection: {
      /** typical knex connection object */
    }
  });

  app.use(_.get('/:userid', function *(userid) {
    this.body = {
      profile: this.knex('users').where('id', userid);
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

[MIT License](http://www.opensource.org/licenses/mit-license.php)

### Author

[Travis Webb](https://github.com/tjwebb) ([me@traviswebb.com](mailto:me@traviswebb.com))
