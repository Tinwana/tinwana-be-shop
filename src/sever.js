import express, { urlencoded } from "express";
import cors from 'cors';
import route from "./routes/index.js";
import { createRequire } from "module";
import connectDb from "./config/db/index.js";
const require = createRequire(import.meta.url);
const methodOverride = require("method-override");
const app = express();

app.use(cors())


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(methodOverride('_method'))  


route(app);
connectDb();

app.listen(4000, (req, res) => {
  console.log("listening on port 4000");
});
export default app;
