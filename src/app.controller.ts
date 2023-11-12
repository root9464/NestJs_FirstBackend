import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    // return this.appService.getHello();
    if (id < 1) {
      throw new BadRequestException('епта айди не должен быть меньше 0');
    }
    return id;
  }
}
