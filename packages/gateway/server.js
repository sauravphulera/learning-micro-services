const server = require("express")();
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const schema = require('./data/schema');

const { port } = require('./config');

server
  .use(express.json())
  .use("/graphql", graphqlExpress({ schema }))
  .use("/gq", graphiqlExpress({ endpointURL: "/graphql" }))
  .get("/", (_,res) => res.redirect('/gq'))
  .listen(port, () => console.log(`server on ${port}`));
