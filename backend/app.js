import express from "express";
import fs from "fs";
const app = express();
app.use(express.json())
import products from './routes/productRoute.js'
app.use("/api/v1",products)
export default app
