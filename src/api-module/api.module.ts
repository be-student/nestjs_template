import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check';

@Module({
  imports: [HealthCheckModule],
})
export class ApiModule {}
