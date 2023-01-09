import { gql } from 'apollo-server-express'
import db from '../database'

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
    celular:Int
    email:String
    avatar:String
  }
`

export const resolvers = {
  Query:{
    profesionales: async () => db.profesional.findAll(),
    profesional: async (obj, args, context, info) =>
      db.profesional.findByPk(args.id),
  }
}