const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
//const mongoose = require("mongoose");

const app = express();

const pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

const conString ="postgres://ouxxxbdo:2jncT3xTTp3My0rssf-Eo1KRl3_v9DvR@nutty-custard-apple.db.elephantsql.com:5432/ouxxxbdo";

const client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }else{
      return console.log("elephant is running ")
  }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
//     client.end();
//   });
});


// mongoose.connect("mongodb://localhost:27017/testtodolist", { useMongoClient: true })
// mongoose.connection.once('open', function() {
//     // we're connected!
//     console.log("connected mongodb")
//   });
// mongoose.connection.on('error', console.error.bind(console, 'connection error:'))

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./routes/api'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res)=> {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const PORT =process.env.port || 3000;
app.listen( PORT, ()=>{
    console.log(`Server is on localhost:${PORT}`)
})