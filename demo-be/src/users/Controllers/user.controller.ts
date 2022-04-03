import { Controller, Post, Get, Request, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { UsersService } from '../users.service';

@Controller('user')
export class UserController {
    constructor(private userService: UsersService) {

    }
  
    @Post('save/user')
    saveUser(@Request() req): any {
        return this.userService.saveUser(req.body);
    }

    @Post('create/password')
    createPassword(@Request() req): any {
        console.log("userDetaisl", req.body);

        return this.userService.createPassword(req.body);
    }

    @Post('otp/validate')           
    validateOtp(@Request() req): any {

        return this.userService.otpValidate(req.body);
    }
    @Post('email/exist/:email')
    isEmailExist(@Param('email') email): any {
        console.log("email", email);
        return this.userService.isEmailExist(email);
    }

    @UseGuards(JwtAuthGuard)
    @Post('user/details')
    getUserDetails(@Request() req): any {

        return this.userService.getUserDetails(req.body.token);
    }

    @UseGuards(JwtAuthGuard)
    @Post('user/data')
    getUserData(@Request() req): any {

        return this.userService.getUserData(req.body.id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('user/send/otp')
    sendOtp(@Request() req): any {

        return this.userService.sendOtp(req.body.name,req.body.username,req.body.userId);
    }


}
