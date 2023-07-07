import express, { urlencoded } from "express";
import cors from 'cors';
import route from "./routes/index.js";
import { createRequire } from "module";
import connectDb from "./config/db/index.js";
const require = createRequire(import.meta.url);
const methodOverride = require("method-override");
require('dotenv').config()
const app = express();

app.use(cors())


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(methodOverride('_method'))  


route(app);
connectDb();

app.listen(process.env.PORT,process.env.HOST_NAME, (req, res) => {
  console.log(`listening on port ${process.env.PORT}`);
});
export default app;
