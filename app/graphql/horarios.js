import { gql } from 'apollo-server-express'
import db from '../database'
const { Op } = require("sequelize");


export const typeDefs = gql`
  extend type Query{
    horarios: [Horario]
    horario(id:ID!): Horario
    horarioPorDia(fecha:String):[Horario]
    horarioPorDiaHora(fecha:String, hora:AllowedHour):Horario   
  }
  type Horario{
    turno_id:ID
    profesional: String
    paciente:String
    duracion:Duration!
    hora: AllowedHour!
    fecha:String
  }
  enum Duration{
    HALF
    ONE
    ONEH
    TWO
  }
  enum AllowedHour{
    NINE
    NINEH
    TEN
    TENH
    ELEVEN
    ELEVENH
    TWELVE
    TWELVEH
    FOURTEEN
    FOURTEENH
    FIFTEEN
    FIFTEENH
    SIXTEEN
    SIXTEENH
    SEVENTEEN
    SEVENTEENH
  }
`
export const resolvers = {
  Duration:{
    HALFHOUR: '0:30',
    ONEHOUR: '1:00',
    ONEHALF: '1:30',
    TWOHOURS: '2:00'
  },
  AllowedHour:{
    NINE: '9:00',
    NINEH: '9:30',
    TEN: "10:00",
    TENH: '10:30',
    ELEVEN: '11:00',
    ELEVENH: '11:30',
    TWELVE: '12:00',
    TWELVEH: '12:30',
    FOURTEEN: '14:00',
    FOURTEENH: '14:30',
    FIFTEEN: '15:00',
    FIFTEENH: '15:30',
    SIXTEEN: '16:00',
    SIXTEENH: '16:30',
    SEVENTEEN: '17:00',
    SEVENTEENH: '17:30',
  },
  Query: {
    horarios: async () =>db.horarios.findAll(),
       
    horario: async (obj, args, context, info) =>
      db.horarios.findByPk(args.id),
    horarioPorDiaHora: async (_,{fecha, hora}) =>{
      try{
        const horario = await db.horarios.findOne({where: { [Op.and]: [
          { fecha: fecha },
          { hora: hora }
        ]}})
        if (horario === null){
          return ''
        } else {
          return horario
        }
      } catch {
        throw new Error('Error')
      }
    },
    horarioPorDia: async (_, {fecha}) =>{
      try{
        const horario = await db.horarios.findAll({where: {fecha:fecha}})
        if (horario === null){
          return ''
        } else {
          return horario
        }
      } catch {
        throw new Error('Error')
      }
    }
  }
}


