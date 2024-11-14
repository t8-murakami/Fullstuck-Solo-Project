const todoModel = require('./models/pathModel')


exports.getPaths = async (req, res) => {
  try {
    const paths = await pathModel.findAll()
    res.status(200).json(paths)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get paths' })
  }
};

exports.createPath = async(req,res) =>{
    const{description,path}= req.body;
    try{
        const newPath = await pathModel.create(description,path);
        res.status(201).json(newPath);
    }catch(err){
        res.status(500).json({error:'Failed to create paths' })
    }
};

exports.deletePath = async(req,res) =>{
    const{id}= req.param;
    try{
        const deleted = await pathModel.deleteById(id);
        res.status(204).end();
    }catch(err){
        res.status(500).json({error:'Failed to delete paths' })
    }
};