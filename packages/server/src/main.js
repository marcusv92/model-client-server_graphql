import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app,
  cosrs: {
    origin: 'http://localhost:3000'
  },
  bodyParserConfig: true,
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server Started ad http://${HOSTNAME}:${PORT}`);
});
