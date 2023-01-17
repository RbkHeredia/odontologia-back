import { gql } from 'apollo-server-express'
import db from '../database'
const { Op } = require("sequelize");


export const typeDefs = gql`
  extend type Query{
    horarios(profesional:String): [Horario]
    horarioPorDia(fecha:String, profesional:String):[Horario]
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
  
  input addDate{
    profesional:String
    paciente: String
    duracion:Duration!
    hora:AllowedHour!
    fecha:String
  }
  
  extend type Mutation{
    agregarCita(input:addDate):Horario
    eliminarHorario(turno_id:Int):Horario
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
    horarios: async (_,{profesional}) =>{
      try{
        const prof = profesional;
        let turnos = [];
        if (prof === 'null'){
          turnos = await db.horarios.findAll();
        } else {
          turnos = await db.horarios.findAll({where:{profesional:profesional}})
        }; return turnos
        
      } catch {
        throw new Error('no hay turnos para mostrar')
      }
    },
    
    horarioPorDia: async (_, {fecha, profesional}) =>{
      try{
        let turnos = [];
        if (profesional === 'all'){
          turnos = await db.horarios.findAll({where: {fecha:fecha}});
        } else {
          turnos = await db.horarios.findAll({where:{[Op.and]:[
            {profesional:profesional},
            {fecha: fecha}
          ]}})
        }; return turnos
        
      } catch {
        throw new Error('Error')
      }
    }
  },
  Mutation:{
    agregarCita: async (_, {input}) =>{
      try{
        const data = await db.horarios.findOne({where:{[Op.and]: [
          { fecha: input.fecha },
          { hora: input.hora }
        ]}})
        if (data){
          throw new Error('ya existe ese horario')
        } else {
          const cita = await db.horarios.create(input)
          return cita
        }
        
      } catch {
        throw new Error('error al crear la cita')
      }
    },
    eliminarHorario: async (_,{turno_id}) =>{
      try{
        let horario = await db.horarios.destroy({where: {turno_id:turno_id}})
        if (horario){
          return 'Ok'
        } else {
          return 'no existe horario'
        }
      } catch {
        throw new Error('no existe el horario')
      }
    },
    
  }
}


