import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"

import route from "./routes/post.route.js";

// .env config is most improtent.
dotenv.config()


const app = express();
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI).then(()=>{

    console.log("DB connected successfully.")

}).catch((error)=>console.log(error))


app.listen(process.env.PORT, ()=>{
    console.log(`Server is runing: ${process.env.PORT}`)
})


app.use("/app/api", route)