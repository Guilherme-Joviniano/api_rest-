"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _connection = require('../config/connection'); var _connection2 = _interopRequireDefault(_connection);

// models

var _Aluno = require('./Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('./Foto'); var _Foto2 = _interopRequireDefault(_Foto);
var _User = require('./User'); var _User2 = _interopRequireDefault(_User);

const db = {};

db.Sequelize = _sequelize2.default;
db.sequelize = _connection2.default;

db.aluno = _Aluno2.default.call(void 0, _connection2.default, _sequelize.DataTypes);
db.foto = _Foto2.default.call(void 0, _connection2.default, _sequelize.DataTypes);
db.user = _User2.default.call(void 0, _connection2.default, _sequelize.DataTypes);

db.sequelize.sync({ force: false });

db.aluno.hasMany(db.foto, {
  foreignKey: 'aluno_id',
});
db.foto.belongsTo(db.aluno, {
  foreignKey: 'aluno_id',
});

exports. default = db;
