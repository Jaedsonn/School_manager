import Sequelize, { Model } from 'sequelize';
import photourl from '../config/photourl';

export default class Foto extends Model{
  static init(sequelize){
      super.init(
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          originalname: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
              notNull: {
                msg: 'O nome original da foto é obrigatório'
              }
            }
          },
          nome: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
              notNull: {
                msg: 'O nome da foto é obrigatório'
              }
            }
          },
          caminho: {
            type: Sequelize.STRING,
            allowNull: false
          },
          url: {
            type: Sequelize.VIRTUAL,
            get(){
              return `${photourl.url}/images/${this.getDataValue('nome')}`
            }
          }
        },
        {
          sequelize,
          tableName: 'fotos',
        }
      )
      return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
  }
}
