// Configurações do Sequelize

module.exports = {
  dialect: 'postgres', // é o banco de dados que eu vou usar
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'codeburger', // qual vai ser o banco de dados
  define: { // definições
    timespamps: true, // pra mostrar a data de criação e data de atualização
    underscored: true, // pra deixar me caixa baixa e com o _
    underscoredAll: true
  }
}
