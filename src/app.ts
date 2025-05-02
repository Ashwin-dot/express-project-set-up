import express, { Request, Response, NextFunction } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import logger from './config/logger';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

 
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        message: err.message,
        path: req.originalUrl,
        location: '',
      },
    ],
  });
});

export default app;
