const dbConfig = require('./config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

//Tu código aquí
sequelize.query('SELECT * FROM users').then(
    resultado => console.log(resultado)
).catch(
    error => console.log(error)
    
)