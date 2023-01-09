import { gql } from 'apollo-server-express'
import db from '../database'

export const typeDefs = gql `
  extend type Query{
    notas: [Nota]
    nota(nota_id:ID!): Nota
  }
  type Nota{
    nota_id: ID
    nota:String
    profesional:String
    fecha:String
  }
  input addNote{
    nota:String
    profesional:String
    fecha:String
  }
  extend type Mutation{
    agregarNota(input:addNote):Nota
    eliminarNota(nota_id:Int):Nota
  }
`

export const resolvers ={
  Query: {
    notas: async () => {
      try{
        const notes = await db.notas.findAll();
        if (!notes){
          throw new Error('no existen notas para mostrar')
        }
        return notes;
      } catch (error){
        throw new Error(error.message)
      }
    },
    nota: async (obj, args, context, info) =>
      db.notas.findByPk(args.id),
  },

  Mutation: {
    agregarNota: async (_,{input})=> {
      try{
        const createNote = await db.notas.create(input)
        
        return createNote
      } catch (error){
        throw new Error('error al crear la nota')
      }
    },
    eliminarNota: async (_,{nota_id}) =>{
      try{
        let nota = await db.notas.destroy({where: {nota_id:nota_id}})
        if (nota){
          return 'Ok'
        } else {
          return 'no existe'
        }
      } catch (error) {
        throw new Error('no existe la nota')
      }
    }
  }
}