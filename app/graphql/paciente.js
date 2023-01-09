import { gql } from 'apollo-server-express'
import db from '../database'

export const typeDefs = gql`
  extend type Query{
    pacientes: [Paciente]
    paciente(paciente_id:ID!): Paciente   
  }
  type Paciente{
    paciente_id:ID
    nombre: String
    celular:String
    activo:Boolean
  }
  input addPacient{
    nombre:String
    celular:String
  }
  input setPacient{
    activo:Boolean
  }
  extend type Mutation{
    agregarPaciente(input:addPacient):Paciente
    desactivarPaciente(paciente_id:Int, input: setPacient):Paciente
  }
`
export const resolvers = {
  Query: {
    pacientes: async () => db.paciente.findAll({where:{activo:true}}),
    paciente: async (args) =>{
      try{
        const pacient = await db.paciente.findAll({where: {nombre:args.nombre}})
        if(!pacient){
          throw new Error('No existe el paciente')
        } else {
          return pacient
        }
      } catch (error){
        throw new Error(error.message)
      }
    }
  },
  Mutation:{
    agregarPaciente: async(_, {input})=>{
      try{
        const createPacient = db.paciente.create(input)
        return createPacient
      } catch {
        throw new Error('no se pudo crear el nuevo paciente')
      }
    },
    desactivarPaciente: async(_,{input, paciente_id})=>{
      db.paciente.update(input ,{where:{paciente_id:paciente_id}})
    },
  }
}