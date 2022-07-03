import Sequelize, { DataTypes } from 'sequelize';
import connection from '../config/connection';

// models

import Aluno from './Aluno';
import Foto from './Foto';
import User from './User';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = connection;

db.aluno = Aluno(connection, DataTypes);
db.foto = Foto(connection, DataTypes);
db.user = User(connection, DataTypes);

db.sequelize.sync({ force: false });

db.aluno.hasMany(db.foto, {
  foreignKey: 'aluno_id',
});
db.foto.belongsTo(db.aluno, {
  foreignKey: 'aluno_id',
});

export default db;
