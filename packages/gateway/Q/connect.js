// amqp://blljakqj:6uZvzD5-bE5P4ewQxYjI4J4I8sKk11WA@shark.rmq.cloudamqp.com/blljakqj
const amqp = require("amqplib/callback_api");

const {
  q: { uri },
} = require("../config");

const q = "test_q";

let channel;

amqp.connect(uri, (err, conn) => {
  if (err) throw new Error(err);
  conn.createChannel((err, ch) => {
    if (err) throw new Error(err);
    ch.assertQueue(q, { durable: true }); // durable = true ensures a copy of message in case of mailing service fails
    channel = ch;
  });
});

const pushToQ = (msg) => {
  if (!channel) {
    setTimeout(() => {
      channel.sendToQueue(q, Buffer.from(msg));
    }, 1000);
  } else {
    channel.sendToQueue(q, Buffer.from(msg));
  }
  return { m: 'done!'};
};

module.exports = {
    pushToQ
}