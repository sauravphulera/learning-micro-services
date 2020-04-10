const { PORT, Q_URI, MJ_API_PUBLIC, MJ_API_SECRET } = process.env;
module.exports = {
  port: PORT || 5000,
  q: {
    uri: Q_URI,
  },
  mailjet: {
    publicApi: MJ_API_PUBLIC,
    secretApi: MJ_API_SECRET,
  },
};
