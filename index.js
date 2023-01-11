import express from 'express';
import connectionDB from './db/db.config.js';
import userRoutes from './user.routes.js';

const app = express();

const runMigrations = async () => {
  try {
    await connectionDB.migrate.up();
    await connectionDB.seed.run();

    console.log('Migrations runned successfully');
  } catch (error) {
    console.error(`Error running migrations! ${error}`);
  }
}

app.use(express.json());
app.use('/api/v1/users', userRoutes);

const server = app.listen(3000, '0.0.0.0', () => {
  const { address, port } = server.address();

  runMigrations();

  console.log(`Server running at http://${address}:${port}`);
});
