import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import * as compression from 'compression';
import helmet from 'helmet';
import { Logger, RequestMethod } from '@nestjs/common';
import SwaggerSetup from './core/setups/swagger.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet()); // helmet
  app.use(compression());
  app.setGlobalPrefix('v1', {
    exclude: [{ path: 'swagger', method: RequestMethod.GET }],
  });

  const config = app.get<ConfigService>(ConfigService);
  const app_env = config.get('APP_ENV');

  if (app_env !== 'production') {
    Logger.log(`App running on ${app_env} environment`);
    SwaggerSetup(app, config);
  }

  await app.listen(3000);
}
bootstrap();
