import { Sequelize } from "sequelize";
import db  from "../config/db";
import Aluno from "../models/Aluno";
import User from "../models/User";
import Foto from "../models/Foto";

const models = [Aluno, User, Foto];

const connection = new Sequelize(db);

models.forEach((model) => {
  model.init(connection);
});
models.forEach((model) => model.associate && model.associate(connection.models));
