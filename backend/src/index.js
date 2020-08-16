const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
//para nossa API entender que esta recebendo informacoes em 'json'
//e devolver informaçoes em 'json'
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');

server.use('/task', TaskRoutes);

server.listen(3333, ()=> {

    console.log("Ok API Rodando");

});