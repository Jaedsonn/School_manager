/* eslint-disable no-undef */
const {config} = require('dotenv');
config();

// eslint-disable-next-line no-undef
module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  define: {
    timestamps: true,
    underscored: true, // Use snake_case for column names
    underscoredAll: true, // Use snake_case for all table names
    'createdAt': 'created_at', // Rename createdAt to created_at
    'updatedAt': 'updated_at', // Rename updatedAt to updated_at
  },
  dialcetOptions: {
  timezone: 'America/Sao_Paulo'
},
timezone: 'America/Sao_Paulo',
}
