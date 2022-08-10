import { HealthCheckModule } from '@core/health-check';
import { Module } from '@nestjs/common';

@Module({
  imports: [HealthCheckModule],
})
export class ApiModule {}
