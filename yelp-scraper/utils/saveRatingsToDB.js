const uuid = require('uuid')
const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB.DocumentClient()

module.exports = (yelpData, businessName) => {
  const date = JSON.stringify(new Date())
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      businessName: businessName,
      reviewCount: yelpData.reviewCount,
      ratings: yelpData.ratings,
      scrapeAt: date,
    }
  }

  dynamodb.put(params, error => {
    if (error) {
      console.error(`Error saving data to DynamoDB: ${error}`)
      return Promise.reject(`Error saving data to DynamoDB: ${error}`)
    } else {
      return Promise.resolve(params.Item)
    }
  })
}
