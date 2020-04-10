const { PORT } = process.env;
module.exports = {
  port: PORT || 4000,
  mongoURI: `mongodb://saurav:${encodeURIComponent('extrmz1@')}@ds063879.mlab.com:63879/microservice_db`
};