"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

exports. default = (connection, DataTypes) => {
  const User = connection.define(
    'users',
    {
      nome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      password: {
        type: DataTypes.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    },
  );

  User.addHook('beforeSave', async (user) => {
    if (user.password) {
      user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
    }
  });

  User.prototype.passwordIsValid = function (password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  };

  return User;
};
