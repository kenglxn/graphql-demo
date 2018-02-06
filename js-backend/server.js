import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'

const port = 8080

express()
  .use('/', graphqlHTTP({ schema, graphiql: true }))
  .listen(port)

console.log(`server is up! @ http://localhost:${port}`)
