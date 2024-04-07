const express = require("express");
const {dbConn} = require('./config/db');
const courseRoutes = require('./routes/course');

const app = express();


const port = 4005;



app.use(express.json())

app.use(courseRoutes);

dbConn();

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})