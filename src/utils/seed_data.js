import {v4 as uuidv4} from 'uuid';
/**
 * @file This file contains the seed data for students.
 * It exports an array of student objects, each with a unique ID and various attributes.
 * The data can be used to populate a database or for testing purposes.
 */

export const students = [
  {
      id: uuidv4(),
      nome: 'João',
      sobrenome: 'Silva',
      idade: 15,
      peso: 65.5,
      altura: 1.75,
      email: 'joao.silva@escola.com',
      data_nascimento: '2009-03-15',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  },
  {
      id: uuidv4(),
      nome: 'Maria',
      sobrenome: 'Santos',
      idade: 14,
      peso: 55.0,
      altura: 1.65,
      email: 'maria.santos@escola.com',
      data_nascimento: '2010-07-22',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  },
  {
      id: uuidv4(),
      nome: 'Pedro',
      sobrenome: 'Oliveira',
      idade: 16,
      peso: 70.2,
      altura: 1.80,
      email: 'pedro.oliveira@escola.com',
      data_nascimento: '2008-11-30',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  },
  {
      id: uuidv4(),
      nome: 'Ana',
      sobrenome: 'Ferreira',
      idade: 15,
      peso: 58.5,
      altura: 1.68,
      email: 'ana.ferreira@escola.com',
      data_nascimento: '2009-05-10',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  },
  {
      id: uuidv4(),
      nome: 'Lucas',
      sobrenome: 'Costa',
      idade: 13,
      peso: 52.0,
      altura: 1.62,
      email: 'lucas.costa@escola.com',
      data_nascimento: '2011-01-25',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  },
  {
      id: uuidv4(),
      nome: 'Julia',
      sobrenome: 'Rodrigues',
      idade: 14,
      peso: 54.8,
      altura: 1.66,
      email: 'julia.rodrigues@escola.com',
      data_nascimento: '2010-09-18',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  },
  {
      id: uuidv4(),
      nome: 'Gabriel',
      sobrenome: 'Almeida',
      idade: 15,
      peso: 63.7,
      altura: 1.73,
      email: 'gabriel.almeida@escola.com',
      data_nascimento: '2009-08-05',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  },
  {
      id: uuidv4(),
      nome: 'Beatriz',
      sobrenome: 'Lima',
      idade: 16,
      peso: 59.9,
      altura: 1.70,
      email: 'beatriz.lima@escola.com',
      data_nascimento: '2008-04-12',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  },
  {
      id: uuidv4(),
      nome: 'Matheus',
      sobrenome: 'Carvalho',
      idade: 13,
      peso: 51.3,
      altura: 1.60,
      email: 'matheus.carvalho@escola.com',
      data_nascimento: '2011-06-28',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  },
  {
      id: uuidv4(),
      nome: 'Isabella',
      sobrenome: 'Martins',
      idade: 14,
      peso: 56.4,
      altura: 1.67,
      email: 'isabella.martins@escola.com',
      data_nascimento: '2010-12-03',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
  }
];
