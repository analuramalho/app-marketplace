/*
const Joi = require('joi')


module.exports={
    body:{
        ad:Joi.string().required(),
        content:Joi.string().required()
    }
}
*/
const Joi = require(`@hapi/joi`)

const schema = Joi.object({
  ad: Joi.string().required(),
  content: Joi.string().required()
})

module.exports = schema