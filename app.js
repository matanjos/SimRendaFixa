require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { ServerApiVersion } = require('mongodb');
const cors = require('cors');
const rotas = require('./Rotas.js');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

const app = express();



mongoose.connect(process.env.DATABASE_URI, {  useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1})
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => console.log(err))



// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(serveStatic(__dirname + '/client/dist'));
app.use(history());
app.use('/', rotas);



const porta = process.env.PORT || 3000;

app.listen(porta, ()=>{
    console.log("Escutando a porta 3000")
}) 