import express from 'express';
import crypto from 'crypto';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema.js';
import resolvers from './resolvers.js'

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

const port = 8080;
app.listen(port, () => console.log('Running Server on port localhost: ' + port));