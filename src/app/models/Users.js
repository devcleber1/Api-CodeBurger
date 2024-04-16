// Model de Usuario

import Sequelize, { Model } from 'sequelize' // importação do Sequelize e o Model de dentro do Sequelize

class User extends Model { // herança da classe Model
  static init (sequelize) {
    /* Campos da tabela no banco de dados */
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      admin: Sequelize.BOOLEAN
    }, {
      sequelize
    })
  }
}
export default User
