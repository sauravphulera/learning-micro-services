const { PORT, MONGO_URI } = process.env;
module.exports = {
  port: PORT || 2500,
  mongoURI: MONGO_URI || `mongodb://saurav:${encodeURIComponent('extrmz1@')}@ds063879.mlab.com:63879/microservice_db`,
};
