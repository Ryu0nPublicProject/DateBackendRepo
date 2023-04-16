"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.application = (0, express_1.default)();
    }
}
const app = new App().application;
var secret = require('../secret.json');
const { Pool } = require('pg');
const pg = new Pool({
    user: 'postgres',
    host: secret.host,
    database: 'postgres',
    password: secret.password,
    port: secret.port
});
pg.connect((err) => {
    if (err)
        console.log(err);
    else {
        console.log("데이터베이스 연결 성공");
    }
});
app.get("/", (req, res) => {
    res.send("healthy");
});
app.get("/get_profile", (req, res) => {
    res.send("profile");
});
app.listen(4000, () => console.log("start"));
