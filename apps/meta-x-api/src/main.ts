import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app/app.module';

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );

  app.useGlobalPipes(new ValidationPipe());

  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest ready'))
  .catch((err) => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);
