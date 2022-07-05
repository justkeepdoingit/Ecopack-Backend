import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import process from 'process';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  })
  app.use(cookieParser());
  await app.listen(process.env.PORT);
}
bootstrap();
