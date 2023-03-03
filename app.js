require('dotenv').config()
const express = require('express')
const app = express()
const storeRoutes = require('./routes/stores')
const connectDB = require("./db/connect")

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/api/v1/stores", storeRoutes);

const port = process.env.PORT
const start = async()=>{
    try {
       await connectDB(process.env.MONGO_URL)
       app.listen(port, console.log(`Server listening on port ${port}`)) 
    } catch (error) {
        console.log(error)
    }
}
start();
