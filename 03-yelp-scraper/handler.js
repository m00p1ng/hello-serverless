'use strict';
const {getPage, parsePage, saveRatingsToDb, deployScraper} = require('./utils')

module.exports.scrape = async (event) => {
  getPage(event)
    .then(parsePage)
    .then((yelpData) => saveRatingsToDb(yelpData, event))

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Scraped ${event}`,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.launch_scrapers = (event) => {
  const fakeDatabaseResult = [
    "urban-light-at-lacma-los-angeles",
    "the-museum-of-contemporary-art-los-angeles",
    "the-last-bookstore-los-angeles"
  ]

  fakeDatabaseResult.forEach(deployScraper)
}
