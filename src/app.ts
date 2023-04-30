import express from "express";
import {pg} from "./db_connect";
import {get_info, set_info} from "./dto";

class App {
  public application : express.Application;
  constructor(){
    this.application = express();
  }
}

const app = new App().application;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const select_query = "SELECT profile_url, name, d_day, tag, description FROM member_info";

app.get("/",
  (req : express.Request , res : express.Response) =>{
  res.send("healthy");
})

app.get(
    "/get_profile",
    (req: express.Request, res: express.Response) => {
      pg.query(select_query, (error: any, result: any) => {
        if (error)
          res.sendStatus(500);
        else
          res.status(200).json(result.rows);
        pg.end();
      });
    }
)

app.listen(4000,()=>console.log("start"));