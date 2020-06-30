const User = require('../models/User')

class SessionController{
    async store(req,res){
        //pega os dados do usuario
        const{ email,password } = req.body 
        //busca o email no banco 
        const user = await User.findOne({email})
        //se não existir o usuario ele retorna usuario não encontrado 
        if(!user){
            return res.status(400).json({error:'User not found'})
        }
        //compara a senha se a senha for diferente do que contei no banco retorna senha invalida
        if(!await user.compareHash(password)){
            return res.status(400).json({error:'Invalid password'})
        }

        //se der tudo certo ele loga no sistema 
        return res.json({ user, token: User.generateToken(user) })
    }
}

module.exports = new SessionController()