const db = require('../db')

module.exports.createTodo = async (event) => {
  const body = JSON.parse(event.body)

  const todo = await db.todo.create({
    task: body.task,
  })

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      todo,
    })
  }

  return response
}
