import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('hello visa app maker');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
