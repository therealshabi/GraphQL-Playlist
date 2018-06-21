const express = require('express');
const graphqlHTTP =  require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');

const app = express();

// connect to mlab database
mongoose.connect("mongodb://therealshabi:test123@ds261660.mlab.com:61660/graphql_ninja");
mongoose.connection.once('open', ()=> {
  console.log("connected to database");
});

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("Server running on port 4000...");
});
