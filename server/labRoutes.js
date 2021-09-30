<<<<<<< HEAD
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import path from 'path';

const __dirname = path.resolve();
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.sendFile(`${__dirname}/server/templates/demo.html`);
  });

export default router;

=======
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import path from 'path';

const __dirname = path.resolve();
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.sendFile(`${__dirname}/server/templates/demo.html`);
  });

export default router;

>>>>>>> 17514e1bb9519f84c7a2fb0ab664c5b893830434
/* eslint-enable no-console */