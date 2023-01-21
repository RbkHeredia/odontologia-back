import { gql } from 'apollo-server-express';
import db from '../database';
import bcrypt from 'bcrypt';
const jsonwebtoken = require('jsonwebtoken')
const saltRounds = 10;
require('dotenv').config()


export const typeDefs = gql `
  extend type Query{
    profesionales:[Profesional]
    profesional(profesional_id:ID!):Profesional
  }
  type Profesional{
    profesional_id:ID
    usuario:String
    password:String
    nombre:String
    especialidad:String
    celular:String
    email:String
    avatar:String
  }
  type AuthPayload {
    token: String!
    user: Profesional!
  }
  input addProfesional{
    usuario:String
    password:String
    nombre:String
    especialidad:String
    celular:String
    email:String
    avatar:String
  }

  type Mutation{
    register(input:addProfesional):AuthPayload!
    login (email: String!, password: String!): AuthPayload!
  }
`

export const resolvers = {
  Query:{
    profesionales: async () => db.profesional.findAll(),
    profesional: async (obj, args, context, info) =>
      db.profesional.findByPk(args.id),
  },
  Mutation:{
    register: async (_, { input }) => {
      try {
        const user = await db.profesional.create({
          nombre: input.nombre,
          especialidad: input.especialidad,
          celular: input.celular,
          avatar: input.avatar,
          usuario: input.usuario,
          email: input.email,
          password: await bcrypt.hash(input.password, saltRounds)
        })
       
        return {
          user, message: "Authentication succesfull"
        }
      } catch (error) {
        throw new Error(error.message)
      }
    },

    login: async (_, { email, password }) => {
      try {
        const user = await db.profesional.findOne({ where: { email }})
        if (!user) {
          throw new Error('No user with that email')
        }
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
          throw new Error('Incorrect password')
        }
        // return jwt
        const token = jsonwebtoken.sign(
          { id: user.profesional_id, email: user.email},
          process.env.JWT_SECRET,
          { expiresIn: '1d'}
        )
        return {
         token, user
        }
    } catch (error) {
      throw new Error(error.message)
    }
  }
  }
}