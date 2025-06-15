import { Sequelize, Model, DataTypes } from "sequelize";
import { generateHash } from "../utils/generate_hash";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: true,
        },
        data_nascimento: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        password: {
          type: Sequelize.VIRTUAL,
          allowNull: false,
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha precisa ter entre 6 e 50 caracteres',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
        },
      },
      {
        sequelize,
        tableName: "alunos",
      }
    );

    this.addHook('beforeSave', async (aluno) => {
      if (aluno.password) {
        aluno.password_hash =  generateHash(aluno.password);
      }
    });

    return this;
  }

  static associate(models){
    this.hasOne(models.Foto, {foreignKey: 'aluno_id'})
  }
}
