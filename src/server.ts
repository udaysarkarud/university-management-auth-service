import mongoose from 'mongoose';
import app from './app';
import config from './config';
import logger from './shared/logger';

async function main() {
  try {
    await mongoose.connect(config.databse_url as string);
    logger.loggerInfo.info('db connected');

    app.listen(config.port, () => {
      logger.loggerInfo.info(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    logger.loggerError.error(error);
  }
}

main();
