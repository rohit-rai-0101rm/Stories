import express from "express";
import fs from "fs";
import { Error } from "./middleware/error.js";
const app = express();
app.use(express.json())
import posts from './routes/prostRoute.js'
app.use("/api/v1",posts)
app.use(Error)
export default app