"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('../config/app'); var _app2 = _interopRequireDefault(_app);

exports. default = (connection, DataTypes) => {
  const Foto = connection.define(
    'fotos',
    {
      originalname: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio!',
          },
        },
      },
      filename: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio!',
          },
        },
      },
      aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      url: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${_app2.default.url}/images/profile/${this.getDataValue('filename')}`;
        },
      },
    },
  );
  return Foto;
};
