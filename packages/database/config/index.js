const configDev = require('./config.dev');
const configProd = require('./config.prod');
const { Node_Env } = process.env;
// console.log(Node_Env);
module.exports = Node_Env === 'production' ? configProd : configDev;
