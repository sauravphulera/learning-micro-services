// const {
//   mailjet: { publicApi, secretApi },
// } = require("../config");
// const mailjet = require("node-mailjet").connect(publicApi, secretApi);

const nodemailer = require("nodemailer");
const accs = 'parthmaheshwari77@gmail.com,developer.sunny98@gmail.com,sukriti@smartjoules.in';
module.exports = async (mail) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
      user: 'phulerasanju20@gmail.com', // generated ethereal user
      pass: 'extrmz12@', // generated ethereal password
    },
  });
  let message  = {
    from: "\"Saurav's Mailing Service\" <phulerasanju20@gmail.com>", // sender address
    to: mail.receiver, // list of receivers
    subject: mail.subject, // Subject line
    text: mail.content, // plain text body
    html: `<center style="font-size:22px;font-weight:900">This is Saurav's Mailing service</center></br>
    <center><b>${mail.content}</b><center>
    `, // html body
  }
  console.log(mail);
  transporter.sendMail(message, (err,info) => {
   if(err) console.log(err);
  //  console.log("Message sent: %s", info.messageId);
  //  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
  });

};