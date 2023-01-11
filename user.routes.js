import bcrypt from 'bcrypt';
import { Router } from 'express';

import db, { TABLES } from './db/db.config.js';
const router = Router();

router.get('/', async (request, response) => {
  const { username, password } = request.query;

  const userData = await db(TABLES.USERS)
    .select(['fullName', 'password'])
    .where('user', username)
    .then(async (records) => {
      const recordsPromise = records.map(async (record) => {
        const hashCompare = await bcrypt.compare(String(password), record.password);

        return {
          ...record,
          hashCompare,
        };
      });

      return Promise.all(recordsPromise);
    })
    .then((records) => records.filter(record => record.hashCompare))
    .then((records) => records.map(record => ({ fullname: record.fullName })))
    .then((records) => records.at(0));

  if (!userData)
    return response.sendStatus(404);

  response.send(userData);
});

export default router;
