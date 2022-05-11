import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ENV from '@/constants/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(ENV.PORT, () =>
    console.log(`Server is running on: http://localhost:${ENV.PORT}`),
  );
}
bootstrap();
