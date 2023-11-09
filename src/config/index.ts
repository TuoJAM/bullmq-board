import { config as defaultConfig } from './config.default';
import { config as devConfig } from './config.dev';
import { config as prodConfig } from './config.prod';
export const config = Object.assign(
  defaultConfig,
  process.env.ENV === 'PROD' ? prodConfig : devConfig,
);
