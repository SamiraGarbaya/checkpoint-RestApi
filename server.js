const express = require('express')
const connectDB = require("./config/connectDB")
require('dotenv').config({path:"./config/.env"})
const app = express()
app.use(express.json())

connectDB()

app.use("/", require("./routes/userRoutes"))

const port = 4000
app.listen(port, () => console.log(`app server listening on port ${port}!`))