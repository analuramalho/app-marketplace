const express = require('express')
const validate = require(`express-joi-validation`).createValidator({})

const routes = express.Router()

const authMiddleware = require('./app/middleware/auth')


const controllers = require('./app/controllers')
const validators = require('./app/validators')


routes.post('/users',validate.body(validators.User),controllers.UserController.store,)
routes.post('/sessions', validate.body(validators.Session), controllers.SessionController.store)

routes.use(authMiddleware)//todas as rotas apartir daqui precisam estar auteticado para acessar

routes.get('/ads',controllers.AdController.index)
routes.get('/ads/:id',controllers.AdController.show)
routes.post('/ads', validate.body(validators.Ad), controllers.AdController.store)
routes.put('/ads/:id', validate.body(validators.Ad), controllers.AdController.update)
routes.delete('/ads/:id',controllers.AdController.destroy)



routes.post('/purchase',validate.body(validators.Purchase),controllers.PurchaseController.store)




module.exports = routes