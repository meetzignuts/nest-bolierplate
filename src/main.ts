import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import { dev } from '../src/config/dev';
import { prod } from '../src/config/prod';

/** Retrieve all configuration based on environment */
const config = async () => (process.env.NODE_ENV === 'dev' ? dev() : prod());

async function bootstrap() {

  /** Add the configuration in the global scope */
  (global as any).config = await config();

  console.log(config());
    
    const { AppModule } = await import('./app.module');
    
    const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
    await app.listen(3000);
}
bootstrap();
