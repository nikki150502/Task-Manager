
const express = require('express');
const  mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const TaskRouetr = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./Models/db')
 
const PORT = process.nextTick.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('hello from server side')
})


// middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/tasks',TaskRouetr)

app.listen(PORT, ()=>{
    console.log(`server is running in port ${PORT}`)
})