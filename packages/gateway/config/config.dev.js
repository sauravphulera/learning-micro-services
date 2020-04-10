const { PORT, SERVICE_DB_PORT, Q_URI } = process.env;
module.exports = {
  port: PORT || 2000  ,
  serviceDatabase : {
    port:   SERVICE_DB_PORT || 4000,
  },
  q : {
    uri: Q_URI,
  }
};