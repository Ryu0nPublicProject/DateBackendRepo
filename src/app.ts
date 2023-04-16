import express from "express"

class App {
  public application : express.Application;
  constructor(){
    this.application = express();
  }
}

const app = new App().application;

var secret = require('../secret.json')

const {Pool} = require('pg');
const pg = new Pool({
  user: 'postgres',
  host: secret.host,
  database: 'postgres',
  password: secret.password,
  port: secret.port
})

pg.connect((err: any) => {
  if (err) console.log(err);
  else {
    console.log("데이터베이스 연결 성공");
  }
})

app.get("/",(req : express.Request , res : express.Response) =>{
  res.send("healthy");
})

app.get(
    "/get_profile",
    (req: express.Request, res: express.Response) => {
        res.send("profile");
    }
)

app.listen(4000,()=>console.log("start"));