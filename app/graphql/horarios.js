import { gql } from 'apollo-server-express'
import db from '../database'

export const typeDefs = gql`
  extend type Query{
    horarios: [Horario]
    horario(id:ID!): Horario   
  }
  type Horario{
    turno_id:ID
    profesional: String
    paciente:String
    duracion:Int
  }
`
export const resolvers = {
  Query: {
    tickets: async () => db.horarios.findAll(),
    ticket: async (obj, args, context, info) =>
      db.horarios.findByPk(args.id),
  }
}