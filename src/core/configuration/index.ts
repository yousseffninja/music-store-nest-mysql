import { IConfig } from '../interfaces/configuration.interface';
import appConfig from './application/application.config';

export default () =>
  ({
    app: appConfig(),
  } as IConfig);
