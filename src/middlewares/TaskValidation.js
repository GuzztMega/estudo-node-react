const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

  const { macaddress, type, title, description, when } = req.body;

  if(!macaddress)
    return res.status(400).json({ error: 'Macaddress é obrigatório'});
  else if(!type)
    return res.status(400).json({ error: 'Tipo é obrigatório'});
  else if(!title)
    return res.status(400).json({ error: 'Título é obrigatório'});  
  else if(!description)
    return res.status(400).json({ error: 'Descrição é obrigatório'});
  else if(!when)
    return res.status(400).json({ error: 'Data e Hora são obrigatórios'});
  else if(isPast(new Date(when)))
    return res.status(400).json({ error: 'Escolha uma data futura'});
  else{
    let task;

    if(req.params.id){
      task = await TaskModel.findOne({ 
        '_id': {'$ne': req.params.id },
        'when': {'$eq': new Date(when) },
        'macaddress': {'$in': macaddress }
      });
    }else{
      task = await TaskModel.findOne({ 
        'when': {'$eq': new Date(when) },
        'macaddress': {'$in': macaddress }
      });
    }
    
    if(task)
      return res.status(400).json({ error: 'Já existe uma tarefa cadastrada neste dia e hora'});   
    next();
  }  
}

module.exports = TaskValidation;