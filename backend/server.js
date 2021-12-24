import app from './app.js'
import dotenv from "dotenv"
dotenv.config({path:"backend/config/config.env"})

app.listen(process.env.PORT_NUMBER,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT_NUMBER}`)
})