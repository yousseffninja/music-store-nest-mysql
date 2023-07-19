import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
export default (app: INestApplication, config: ConfigService) => {
  const operationIdFactory = (controllerKey: string, methodKey: string) =>
    methodKey;
  const publicConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(`${config.get('APP_NAME')} API`)
    .setDescription(`${config.get('APP_NAME')} API description`)
    .setVersion('v1')
    .setContact(
      'Contact',
      'https://github.com/yousseffninja',
      'yousseffmohamedd22@gmail.com',
    )
    .setLicense(
      'Developed by Youssef Mohamed',
      'https://github.com/yousseffninja',
    )
    .addServer(config.get('APP_HOST'))
    .build();
  const publicDocument = SwaggerModule.createDocument(app, publicConfig, {
    include: [],
    operationIdFactory,
  });
  SwaggerModule.setup('swagger', app, publicDocument);
};
