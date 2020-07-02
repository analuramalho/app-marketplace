const Ad = require('../models/Ad')


class AdController{
    //listar 
    async index(req,res){
        const ads = await Ad.find()

        return res.json(ads)
    }
    
    //filtrar apenas 1 anuncio
    async show(req,res){
        const ad = await Ad.findById(req.params.id)
        
        return res.json(ad)
    }

    //crição anuncio 
    async store(req,res){
        const ad = await Ad.create({ ...req.body, author: req.userId })
        //const ad = await Ad.create({ ...req.body, author: '5efbcc28aca67406b847df1c'})

        return res.json(ad)
    }

    //atualizar anuncio
    async update(req,res){
        const ad = await Ad.findByIdAndUpdate(req.params.id, req.body,{
            new:true
        })
        
        return res.json(ad)
    }

    //deletar anuncio
    async destroy(req,res){
        await Ad.findByIdAndDelete(req.params.id)
        
        return res.send()
    }
}


module.exports = new AdController()