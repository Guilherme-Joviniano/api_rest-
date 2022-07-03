import jwt from 'jsonwebtoken';
import db from '../models';

const User = db.user;

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
    const token = jwt.sign({
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

export default new Token();
