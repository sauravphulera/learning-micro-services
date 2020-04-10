// amqp://blljakqj:6uZvzD5-bE5P4ewQxYjI4J4I8sKk11WA@shark.rmq.cloudamqp.com/blljakqj
const amqp = require("amqplib/callback_api");

const {
  q: { uri },
} = require("../config");

const sendMail = require('../handler/sendMail');

module.exports = () => {
  const q = "test_q";

  amqp.connect(uri, (err, conn) => {
    if (err) throw new Error(err);
    conn.createChannel((err, ch) => {
      if (err) throw new Error(err);
      ch.assertQueue(q, { durable: true }); // durable = true ensures a copy of message in case of mailing service fails
      ch.consume(q, msg => {
        let mail;
         try {
            mail = JSON.parse(msg.content.toString());
         } catch(e) {
             console.log(e);
             mail = msg.content.toString();
         }
        sendMail(mail);
        ch.ack(msg);
      }, {noAck: false});
    });
  });
};
