import { Router } from "express";
import bodyParser from 'body-parser';
import dep from "./controller.js";
const r=Router();
r.use(bodyParser.json())

r.get("/getAllDeployments",dep)
export default r

//run with node app.js