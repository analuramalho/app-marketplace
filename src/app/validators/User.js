/*
const Joi = require('joi')


module.exports={
    body:{
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().required()
        
    }
}
*/
const Joi = require(`@hapi/joi`)

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6)
})

module.exports = schema