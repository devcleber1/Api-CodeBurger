/* Conexão dos bancos de dados */

import Sequelize from 'sequelize'
import User from '../app/models/Users'
import configDataBase from '../config/database'
import Product from '../app/models/Product'
import Category from '../app/models/Category'
const models = [User, Product, Category] // recebendo os models

class Database {
  constructor () {
    this.init()
  }

  init () { // configuração da conecção dos Models
    this.connection = new Sequelize(configDataBase)
    models.map((model) => model.init(this.connection))
  }
}

export default new Database()
