const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:NqvS4V684EOi821efe08@todo-db.cnakg7vux7sr.ap-southeast-1.rds.amazonaws.com:5432/todo-db')

const todo = require('./models/todo')(sequelize, Sequelize)

const db = {
  Sequelize,
  sequelize,
  todo,
}

db.sequelize.sync()

module.exports = db;
