import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { AppService } from './app.service';

class FindOneParams {
  @ApiProperty()
  @IsNumber()
  hello: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/test')
  test(@Body() test: FindOneParams) {
    return test.hello;
  }
}
