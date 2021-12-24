import app from './app.js'
import dotenv from "dotenv"
import { connectDatabse } from './config/databse.js'

dotenv.config({path:"backend/config/config.env"})

connectDatabse()

app.listen(process.env.PORT_NUMBER,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT_NUMBER}`)
})