const path = require("path");

const basePath = path.join(__dirname, "./packages");
module.exports = {
  apps: [
    {
      name: "Gateway",
      script: basePath + "/gateway/server.js",
      watch: true,
      env: {
        PORT: 2000,
        SERVICE_DB_PORT: 4000,
        instances: "max",
        Q_URI: 'amqp://blljakqj:6uZvzD5-bE5P4ewQxYjI4J4I8sKk11WA@shark.rmq.cloudamqp.com/blljakqj'
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 2000,
        SERVICE_DB_PORT: 4000,
        instances: "max",
        Q_URI: 'amqp://blljakqj:6uZvzD5-bE5P4ewQxYjI4J4I8sKk11WA@shark.rmq.cloudamqp.com/blljakqj'
      }
    },
    {
      name: "database",
      instances: "max",
      script: basePath + "/database/server.js",
      // watch: true,
      env: {
        PORT: 4000,
        MONGO_URI: `mongodb://saurav:${encodeURIComponent('extrmz1@')}@ds063879.mlab.com:63879/microservice_db`,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4000,
        MONGO_URI: `mongodb://saurav:${encodeURIComponent('extrmz1@')}@ds063879.mlab.com:63879/microservice_db`,
      }
    },
    {
      name: "mailing-service",
      script: basePath + "/mailing-service/index.js",
      instances: "max",
      env: {
        PORT: 5000,
        Q_URI: 'amqp://blljakqj:6uZvzD5-bE5P4ewQxYjI4J4I8sKk11WA@shark.rmq.cloudamqp.com/blljakqj',
        MJ_API_PUBLIC: '613120b289a638478c28cee703f6200f',
        MJ_API_SECRET: 'ecaed5013d6d9e41708b040ea46cbcf7'
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5000,
        Q_URI: 'amqp://blljakqj:6uZvzD5-bE5P4ewQxYjI4J4I8sKk11WA@shark.rmq.cloudamqp.com/blljakqj',
        MJ_API_PUBLIC: '613120b289a638478c28cee703f6200f',
        MJ_API_SECRET: 'ecaed5013d6d9e41708b040ea46cbcf7'
      }
    },
  ],
};
