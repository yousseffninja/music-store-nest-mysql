import * as joi from 'joi';

export const configSchema = joi.object({
  APP_NAME: joi.string(),
  APP_ENV: joi.string().valid('development', 'production', 'local', 'test'),
  APP_HOST: joi.string(),
  APP_PORT: joi.number().default(3000),
  MYSQL_HOST: joi.string().default('localhost'),
  MYSQL_PORT: joi.number().default(3306),
  MYSQL_DATABASE: joi.string(),
  MYSQL_USERNAME: joi.string(),
  MYSQL_PASSWORD: joi.string(),
});
