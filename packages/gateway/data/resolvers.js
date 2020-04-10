const axios = require("axios");
const { serviceDatabase: { port } } = require('../config');
const dbUrl = `http://localhost:${port}`;
const { pushToQ } = require('../Q/connect'); 

const getMails = async () => {
  const mails = (await axios.get(`${dbUrl}/mails`)).data.payload;
  return mails;
};
const getMyMail = async (id) => {
  const mail = (await axios.get(`${dbUrl}/mails/${id}`)).data
    .payload;
  return mail;
};

const postSingleMail = async (body) => {
  const mail = (
    await axios.post(`${dbUrl}/saveMails`, { ...body })
  ).data.payload;
  pushToQ(JSON.stringify(body));
  return mail;
};
module.exports = {
  Query: {
    mails: () => getMails(),
    // args is arguement passed by user
    mail: (_, { id }) => getMyMail(id),
  },
  Mutation: {
    mail: (_, args) => postSingleMail(args),
  },
};
