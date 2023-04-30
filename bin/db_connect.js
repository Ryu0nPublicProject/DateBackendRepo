"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pg = void 0;
var secret = require('../secret.json');
const { Pool } = require('pg');
exports.pg = new Pool({
    user: 'postgres',
    host: secret.host,
    database: 'postgres',
    password: secret.password,
    port: secret.port
});
exports.pg.connect();
