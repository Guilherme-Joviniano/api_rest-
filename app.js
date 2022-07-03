import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/config/database';
import express from 'express';

import homeRoutes from './src/routes/home';
import tokenRoutes from './src/routes/token';
import userRoutes from './src/routes/user';
import alunoRoutes from './src/routes/aluno';
import fotoRoutes from './src/routes/foto';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
