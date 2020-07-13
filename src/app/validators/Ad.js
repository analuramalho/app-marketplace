/*
const Joi = require('joi')
module.exports={
    body:{
        title:Joi.string().required(),
        description:Joi.string().required(),
        price:Joi.number().required()
    }
}
*/

const Joi = require(`@hapi/joi`)

const schema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required()
})

module.exports = schema