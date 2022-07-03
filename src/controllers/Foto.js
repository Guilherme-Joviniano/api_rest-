import multer from 'multer';
import multerConfig from '../config/multer';
import db from '../models';

const Foto = db.foto;
const upload = multer(multerConfig).single('fotoDePerfil');

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

export default new FotoController();
