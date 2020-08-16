const mongoose = require('mongoose');

//minha URL de conexão com banco de dados
const url = 'mongodb://localhost:27017/todo';
//useNewUrlParser = para ter compatibilidade com outras versoes de mongo
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

module.exports = mongoose;
