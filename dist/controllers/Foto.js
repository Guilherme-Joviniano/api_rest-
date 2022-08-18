"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);
var _models = require('../models'); var _models2 = _interopRequireDefault(_models);

const Foto = _models2.default.foto;
const upload = _multer2.default.call(void 0, _multer4.default).single('fotoDePerfil');

class FotoController {
  store(req, res) {
    try {
      return upload(req, res, async (err) => {
        if (err) {
          return res.status(400).json({
            errors: [err.code],
          });
        }

        try {
          const { originalname, filename } = req.file;
          const { aluno_id } = req.body;
          const foto = await Foto.create({ originalname, filename, aluno_id });
          return res.json(foto);
        } catch (e) {
          return res.status(400).json({
            errors: e,
          });
        }
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new FotoController();
