import Sequelize from 'sequelize';
import db from '../db/db.js';

const Student = db.define('Student',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    GPA: {
      type: Sequelize.DECIMAL,
    },
    rank: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Student;
