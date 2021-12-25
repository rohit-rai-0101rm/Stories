import app from './app.js'
import dotenv from "dotenv"
import { connectDatabse } from './config/databse.js'
import cloudinary from 'cloudinary'
 
dotenv.config({path:"backend/config/config.env"})

connectDatabse()
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})
cloudinary.v2.search.expression(
  'folder:Stories' // add your folder
  ).sort_by('public_id').max_results(30).execute().then(result=>console.log(result));

app.listen(process.env.PORT_NUMBER,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT_NUMBER}`)
})
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  })