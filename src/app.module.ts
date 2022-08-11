import { ApiModule } from '@modules/api.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
    }),
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
