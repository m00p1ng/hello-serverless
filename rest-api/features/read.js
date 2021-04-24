module.exports.getTodo = async (event) => {
  const todo = 'Make dinner'

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      todo,
    })
  }

  return response
}
