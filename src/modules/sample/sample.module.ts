import { Module } from '@nestjs/common';
import { SampleService } from './sample.service';
import { SampleController } from './sample.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './entities';
import { SampleOne } from './entities/sampleOne.entity';
import { SampleMany } from './entities/sampleMany.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleOne, SampleMany])],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
