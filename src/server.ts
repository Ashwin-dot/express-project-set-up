import app from './app';
import { Config } from './config';
import logger from './config/logger';

const PORT = Config.PORT;
try {
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
} catch (error) {
  logger.error(`Error starting server: ${error}`);
}
