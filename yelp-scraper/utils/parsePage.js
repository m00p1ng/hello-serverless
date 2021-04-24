const cheerio = require('cheerio')

module.exports = (page) => {
  try {
    const $ = cheerio.load(page)
    const ratings = $(".i-stars__373c0__1T6rz").attr('aria-label').trim().split(" ")[0];
    const reviewCount = $(".arrange-unit__373c0__1piwO > .css-bq71j2").text().trim().split(" ")[0];

    const yelpData = {
      ratings,
      reviewCount,
    }

    return Promise.resolve(yelpData);
  } catch (error) {
    return Promise.reject(`Error parsing page: ${JSON.stringify(error)}`);
  }
}
