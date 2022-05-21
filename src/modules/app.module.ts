import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app.controller';
import { AppService } from '@/services/app.service';
import { HomeModule } from './home.module';

@Module({
  imports: [HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
