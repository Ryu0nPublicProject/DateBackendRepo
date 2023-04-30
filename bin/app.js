"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_connect_1 = require("./db_connect");
class App {
    constructor() {
        this.application = (0, express_1.default)();
    }
}
const app = new App().application;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const select_query = "SELECT profile_url, name, d_day, tag, description FROM member_info";
app.get("/", (req, res) => {
    res.send("healthy");
});
app.get("/get_profile", (req, res) => {
    db_connect_1.pg.query(select_query, (error, result) => {
        if (error)
            res.sendStatus(500);
        else
            res.status(200).json(result.rows);
        db_connect_1.pg.end();
    });
});
app.listen(4000, () => console.log("start"));
