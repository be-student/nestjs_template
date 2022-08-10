import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
// import * as cookieParser from 'cookie-parser';
// import * as csurf from 'csurf';
import { AppModule } from './app.module';
import { setupSwagger } from './core/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api', { exclude: ['docs'] });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  setupSwagger(app);
  app.enableCors();

  // app.use(cookieParser());
  // app.use(csurf({ cookie: true }));
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  await app.listen(port, () => {
    console.log(`SERVER LISTENING ON port ${port}`);
  });
}
bootstrap();
