'use strict';

module.exports.hello = async (event) => {
  const now = new Date();

  const message = `The time is ${now}`

  console.log(message);

  return {
    statusCode: 200,
    body: {
      message,
    }
  }
};
