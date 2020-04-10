const path = require("path");

const basePath = path.join(__dirname, "./packages");
module.exports = {
  apps: [
    {
      name: "Gateway",
      script: basePath + "/gateway/server.js",
      // watch: true,
      env: {
        PORT: 2000,
        SERVICE_DB_PORT: 4000,
        Q_URI: 'amqp://blljakqj:6uZvzD5-bE5P4ewQxYjI4J4I8sKk11WA@shark.rmq.cloudamqp.com/blljakqj'
      },
    },
    {
      name: "database",
      script: basePath + "/database/server.js",
      // watch: true,
      env: {
        PORT: 4000,
      },
    },
    {
      name: "mailing-service",
      script: basePath + "/mailing-service/index.js",
      watch: true,
      env: {
        PORT: 5000,
        Q_URI: 'amqp://blljakqj:6uZvzD5-bE5P4ewQxYjI4J4I8sKk11WA@shark.rmq.cloudamqp.com/blljakqj',
        MJ_API_PUBLIC: '613120b289a638478c28cee703f6200f',
        MJ_API_SECRET: 'ecaed5013d6d9e41708b040ea46cbcf7'
      },
    },
  ],
};
