import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
//import { LocalAuthGuard } from './modules/users/auth/local-auth.gard';
import { AuthService } from './modules/users/auth/auth.service';
import { JwtAuthGuard } from './modules/users/auth/strategy/jwt-auth.guard';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  //@UseGuards(LocalAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('login')
  login(@Request() req): any {
    console.log('kjdhfkj',req)
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }

  @Get('a')
  w() {
    console.log('str', 'oka');
    return 's';
  }
}
