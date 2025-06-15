import { Sequelize, Model, DataTypes } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          defaultValue: "",
          validate:{
            notEmpty: true,
            len:{
              args: [3, 255],
              msg: "Username must be between 3 and 255 characters long."
            }
          }
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: {
              msg: "Email must be a valid email address."
            },
            notEmpty: true,
          }
        },
        password: {
          type: Sequelize.VIRTUAL,
          allowNull: false,
          validate: {
            notEmpty: true,
            len: {
              args: [6, 255],
              msg: "Password must be between 6 and 255 characters long.",
            }
          }
        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ""
        },
      },
      {
        sequelize,
        tableName: "users",
      }
    );

    this.addHook("beforeSave", async (user) => {
        if (user.password) {
          user.password_hash = await bcryptjs.hash(user.password, 8);
        }
    });

    return this;
  }
}
