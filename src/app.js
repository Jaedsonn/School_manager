import express from "express"
import { config } from "dotenv";
import router from "./routes/index";
import cors from "cors"
import './database/index';
import {resolve} from "path"

config();

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(express.static(resolve(__dirname,"..","uploads" )))
app.use(router)


app.listen(PORT, ()=>{
  console.log("Server running")
})
