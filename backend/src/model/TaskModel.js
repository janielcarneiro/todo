const mongoose = require('../config/database');
//Schema = representação de como os dados serao armazenados no banco
const Schema = mongoose.Schema;
//TaskSchema = representação da tarefa
//macaddress = e um indentificador fisico do dispositivo
const TaskSchema = new Schema({
    macaddress: {type: String, required: true},
    type: {type: Number, required: true}, 
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, required: true},
    done: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()}
});
//Task = como vai colocar no banco
module.exports = mongoose.model('Task', TaskSchema);