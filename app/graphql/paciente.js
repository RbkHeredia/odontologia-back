import { gql } from 'apollo-server-express'
import db from '../database'

export const typeDefs = gql`
  extend type Query{
    pacientes: [Paciente]
    paciente(id:ID!): Paciente   
  }
  type Paciente{
    paciente_id:ID
    nombre: String
    celular:Int
  }
`
export const resolvers = {
  Query: {
    pacientes: async () => db.pacientes.findAll(),
    paciente: async (obj, args, context, info) =>
      db.pacientes.findByPk(args.id),
  }
}