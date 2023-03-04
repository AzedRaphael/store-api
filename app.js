require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const storeRoutes = require('./routes/stores')
const connectDB = require("./db/connect")
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/api/v1/stores", storeRoutes);

app.use(errorHandler);
app.use(notFound);

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
