const TaskModel = require('../model/TaskModel');
//ispat = para verificar se a data ta no passado
const { isPast} = require('date-fns');

const TaskValidation =  async (req, res, next) => {

    //fazer uma desestruturação dos dados que vem do corpo da requisição
    const { macaddress, type, title, description, when } = req.body;

    if(!macaddress)
        return res.status(400).json({ error: 'macaddress é obrigatório'});
    else if(!type)
        return res.status(400).json({ error: 'tipo é obrigatório'});
    else if(!title)
        return res.status(400).json({ error: 'titulo é obrigatório'});
    else if(!description)
        return res.status(400).json({error: 'descrição é obrigatório'});
    else if(!when)
        return res.status(400).json({error: 'data e Hora são Obrigatorios'});
    else{
        //'$eq' = e o operador de igual
        //verificar se  macaddress é do mesmo usuario
        //'$in' = para saber se existir
        //$ne = operador de negação 'se for diferente'
        let exists;

        if(req.params.id){
            //'_id' :'$ne': req.params.id = ignorar as tarefas que contenham este _id
            //comparar com outras tarefas
            exists = await TaskModel.findOne({
                '_id': {'$ne': req.params.id},
                'when':{'$eq' : new Date(when)},
                'macaddress' : {'$in' : macaddress}

            });

        }else{
        if(isPast(new Date(when)))
            return res.status(400).json({error: 'escolha uma data é hora futura'});
        //para não deixar cadastrar duas tarefas no mesmo horario
        exists = await TaskModel.findOne({ 
            
            'when':{'$eq': new Date(when)},
            'macaddress': {'$in': macaddress}

        });
    }

    if(exists){
        return res.status(400).json({error: 'já existi uma tarefa neste dia é horario'});
    }

    next();

    }
}

module.exports = TaskValidation;