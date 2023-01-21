import '@babel/polyfill'
import express from 'express'
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const app = express()
const jwt =  require('jsonwebtoken')
require('dotenv').config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


const getUser = token => {
    try {
      if (token) {
        return jwt.verify(token, JWT_SECRET)
      }
      return null
    } catch (error) {
      return null
    }
  }
const server = new ApolloServer({
    context: ({ req }) => {
        const token = req.get('Authorization') || ''
        return { user: getUser(token.replace('Bearer', ''))}
      },
      introspection: true,
      playground: true,
      modules: [
        require('./graphql/horarios.js'),
        require('./graphql/paciente.js'),
        require('./graphql/notas.js'),
        require('./graphql/profesional.js')
    ],
})

const serverRun = async () =>{
    await server.start().then(res=>{})

    server.applyMiddleware({ app })
    
    app.get('/', (req, res) => res.send('Hello World!'))
    
    app.listen({ port: 5000 }, () =>
        console.log(`🚀 Server ready at http://localhost:5000`),
    )
}

serverRun()