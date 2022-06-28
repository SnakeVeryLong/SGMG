import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from './strategy/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login( @Body() body) {
    console.log("jgjh",body);
    
    const auth = await this.authService.login(body);
    return auth;
  }

  @Post('register')
  async register(@Req() req, @Res() res, @Body() createUserDto: CreateUserDto) {
    const auth = await this.authService.createUser(createUserDto);
    res.status(auth.status).json(auth.content);
  }
}
