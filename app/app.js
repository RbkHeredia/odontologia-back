import '@babel/polyfill'
import express from 'express'
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const server = new ApolloServer({
    modules: [
        require('./GraphQL/horarios.js'),
        require('./GraphQL/paciente.js')

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