/* Conexão dos bancos de dados */

import Sequelize from 'sequelize'
import mongoose from 'mongoose'
import User from '../app/models/Users'
import configDataBase from '../config/database'
import Product from '../app/models/Product'
import Category from '../app/models/Category'
const models = [User, Product, Category] // recebendo os models

class Database {
  constructor () {
    this.init()
    this.mongo()
  }

  init () { // configuração da conecção dos Models
    this.connection = new Sequelize(configDataBase)
    models.map((model) => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
  }

  mongo () {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/codeburger',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
  }
}

export default new Database()
