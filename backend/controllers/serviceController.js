const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async(req, res) => {
    try { 
      const service = {
        name: req.body.name, 
        description: req.body.name,
        price: req.body.price,
        image: req.body.image
      };
      const response = await ServiceModel.create(service);
      res.status(201).json({response, msg: "🟢Serviço criado com sucesso!"})
    } catch (error) {
      console.log(error)
    }
  },
  getAll: async(_req,res) => {
    try { 
      const service = await ServiceModel.find();
      res.json(service);
    } catch(error) {
      console.log(error);
    }
  },
  get: async(req,res) => {
    try {
      const id = req.params.id
      const service = await ServiceModel.findById(id)
      if(!service) {
        res.status(404).json({msg: "⚠️Serviço nao encontrado!"})
      }
      res.json(service)
    } catch(error) {
      console.log(error)
    }
  },
  delete: async(req,res) => {
    try {
      const id = req.params.id
      const service = await ServiceModel.findById(id)
      if(!service) {
        res.status(404).json({msg: "⚠️Serviço nao encontrado!"})
      }
      const deleteService = await ServiceModel.findByIdAndDelete(id)
      res.status(200).json({deleteService, msg: "🟢Serviço excluído com sucesso!"})
    } catch(error) {
      console.log(error)
    }
  },
  update: async(req,res) => {
    try {
      const id = req.params.id
      const service = {
        name: req.body.name, 
        description: req.body.name,
        price: req.body.price,
        image: req.body.image
      };
      const updatedService = await ServiceModel.findByIdAndUpdate(id,service);
      if(!updatedService) {
        res.status(404).json({msg: "⚠️Serviço nao encontrado!"})
      }
      res.status(200).json({service, msg: "🟢Serviço atualizado com sucesso"})
    } catch(error) {
      console.log(error)
    }
  }
};

module.exports = serviceController;