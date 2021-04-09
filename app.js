require('dotenv').config();
const express = require('express');
const app = express();
const userRauter = require('./src/routes/userRouter');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL,
     {useNewUrlParser:true,
     useUnifiedTopology:true},
     (error) => {
         if(error){
            console.log(error);
         }else{
            console.log('Mongo connect');
         }
     })

app.use('/', cors())
app.use('/', express.json());
app.use('/', (req, res) => {
   return res.send('hello world')
})
app.use('/user', userRauter);

module.exports = app;

