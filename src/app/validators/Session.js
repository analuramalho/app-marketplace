/*const Joi = require('joi')


module.exports={
    body:{
        email:Joi.string().email().required(),
        password:Joi.string().required()
    }
}
*/

const Joi = require(`@hapi/joi`)

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

module.exports = schema