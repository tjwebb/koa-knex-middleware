var Knex = require('knex');

module.exports = function (opts) {
  return function *knex(next) {
    global.__knex || (global.__knex = Knex.initialize({
      client: opts.client,
      connection: {
        host: (opts.connection && opts.connection.host) || process.env.KOA_KNEX_HOST,
        port: (opts.connection && opts.connection.port) || process.env.KOA_KNEX_PORT,
        user: (opts.connection && opts.connection.user) || process.env.KOA_KNEX_USER,
        password: (opts.connection && opts.connection.password) || process.env.KOA_KNEX_PASSWORD,
        database: (opts.connection && opts.connection.database) || process.env.KOA_KNEX_DATABASE,
        charset: (opts.connection && opts.connection.charset) || process.env.KOA_KNEX_CHARSET,
        ssl: (opts.connection && opts.connection.ssl) || process.env.KOA_KNEX_SSL,
        debug: (opts.connection && opts.connection.debug) || process.env.KOA_KNEX_DEBUG,

        /** For SQLite 3: http://knexjs.org/#Initialize */
        filename: (opts.connection && opts.connection.filename) || process.env.KOA_KNEX_FILENAME
      }
    }));
    this.knex = global.__knex;

    yield next;
  };
};
