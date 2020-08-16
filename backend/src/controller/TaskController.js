const TaskModel = require('../model/TaskModel');
//para devolver o dia e a hora atual
const current = new Date();
//para pegar a primeira hora do dia e a ultima
const { startOfDay,
        endOfDay, 
        startOfWeek, 
        endOfWeek,
        startOfMonth, 
        endOfMonth, 
        startOfYear, 
        endOfYear
    } = require('date-fns');

class TaskController {
    //await = quando for no banco node esperar executar tudo para 
    //depois seguir em frente
    async create(req, res){

        const task = new TaskModel(req.body);
        //.json = para devolver no formator de json
        await task.save().then(response=>{
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        });
    }

    async update(req, res){
        //resgatar os dados que eu quero atualizar //new: true = para devolver tarefa atualizada
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true, useFindAndModify: false}).
        then(response => {

            return res.status(200).json(response);

        }).catch(error => {

            return res.status(500).json(error);

        });

    }
    //Listar todas as tarefas //find = e o comando para encontrar valor 
    //$in = ingual = para trazer organizado
    async all(req, res){

        TaskModel.find({macaddress: {'$in': req.params.macaddress}}).sort('when').then(response => {

            return res.status(200).json(response);

        }).catch(error =>{

            return res.status(500).json(error);

        });

    }

    async show(req, res){

        await TaskModel.findById(req.params.id).then(response => {

            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'Tarefa não foi encontrada'});

        }).catch(error => {

            return res.status(500).json(error);

        });

    }

    async delete(req, res){

        await TaskModel.deleteOne({'_id': req.params.id}).then(response => {

            return res.status(200).json(response);

        }).catch(error => {

            return res.status(500).json(error);

        });

    }

    //Atualizar o Status da Tarefa
    //'done' = campo que eu quero atualizar new: true para devolver dados atualizado
    async done(req, res){

        await TaskModel.findByIdAndUpdate(

            {'_id': req.params.id},
            {'done':req.params.done},
            {new: true, useFindAndModify: false}

        ).then(response => {

            return res.status(200).json(response);

        }).catch(error => {

            return res.status(500).json(error);

        });

    }

    async late(req, res){
        //$lt = para trazer todos que seja menor ou igual
        //$in = operador de igual
        await TaskModel.find({

            'when' : {'$lt': current},
            'macaddress': {'$in': req.params.macaddress}

        }).sort('when').then(response => {

            return res.status(200).json(response);

        }).catch(error => {

            return res.status(500).json(error);

        });

    }

    async today(req, res){
        //$gte = operador de maior ou igual que
        //$lte = menor ou igual que //$lt = for menor que
        await TaskModel.find({
    
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfDay(current), '$lte': endOfDay(current)}

        }).sort('when').then(response => {

            return res.status(200).json(response);

        }).catch(error => {

           return res.status(500).json(error); 

        });

    }

    async week(req, res){

        await TaskModel.find({

            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfWeek(current), '$lte': endOfWeek(current)}

        }).sort('when').then(response => {

            return res.status(200).json(response);

        }).catch(error =>{

            return res.status(500).json(error);

        })

    }

    async month(req, res){

        await TaskModel.find({

            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)}

        }).sort('when').then(response => {

            return res.status(200).json(response);

        }).catch(error => {

            return res.status(500).json(error);

        });

    }

    async year(req, res){

        await TaskModel.find({

            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)}

        }).sort('when').then(response => {

            return res.status(200).json(response);

        }).catch(error => {

            return res.status(500).json(error);

        })

    }

}

module.exports = new TaskController();