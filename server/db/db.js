import Sequelize from 'sequelize';
import password from '../config/mysqlsetup.js';

const db = new Sequelize('swivel', 'root', password);

export default db;
