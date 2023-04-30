var secret = require('../secret.json')
const {Pool} = require('pg');

export const pg = new Pool({
  user: 'postgres',
  host: secret.host,
  database: 'postgres',
  password: secret.password,
  port: secret.port
})

pg.connect();