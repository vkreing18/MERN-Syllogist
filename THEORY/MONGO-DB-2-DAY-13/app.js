const express = require('express');
const { dbConn } = require('./config/db');
const courseRoutes = require('./routes/course');
const userRoutes = require('./routes/user');

const app = express();


const port = 4002;

app.use(express.json());

app.use('/user',userRoutes);
app.use('/course',courseRoutes);

dbConn();

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})
