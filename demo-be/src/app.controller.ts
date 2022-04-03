import { Controller, Get,Post, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private authService: AuthService) {}
    //login
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        var data = await this.authService.login(req.body);
        console.log("userlogin", req);

        return data;
    }


    @UseGuards(JwtAuthGuard)
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }


}
