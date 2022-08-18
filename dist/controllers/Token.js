"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _models = require('../models'); var _models2 = _interopRequireDefault(_models);

const User = _models2.default.user;

class Token {
  async store(req, res) {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Invalid Credentials'],
      });
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['User do not exist'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Invalid Password!'],
      });
    }

    const { id } = user;
    const token = _jsonwebtoken2.default.sign({
      id,
      email,
    }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      token,
    });
  }
}

exports. default = new Token();
