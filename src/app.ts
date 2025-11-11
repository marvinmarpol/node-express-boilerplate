import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import { logger } from './middleware/logger';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(logger)
app.use('/api', routes);

export default app;
