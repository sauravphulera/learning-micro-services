const mongoose = require("mongoose");
const Mail = mongoose.model("Mail");
const pingHandler = (_, res) => {
  res.send("healthy");
};

const mailsHandler = async (_, res) => {
  let mails;
  let error;

  try {
    mails = await Mail.find();
  } catch (e) {
    error = e;
  }
  res.send({
    message: "got res from db",
    services: "Database services",
    status: 200,
    payload: mails || error,
  });
};
const singleMailHandler = async (req, res) => {
  let mail;
  let error;

  try {
    mail = await Mail.findOne({ _id: req.params.id });
  } catch (e) {
    error = e;
  }
  res.send({
    message: "got res from db",
    services: "Database services",
    status: 200,
    payload: mail || error,
  });
};

module.exports = (server) => {
  server
    .get("/", pingHandler)
    .get("/mails", mailsHandler)
    .get("/mails/:id", singleMailHandler);
};
