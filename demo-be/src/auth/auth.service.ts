import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Console } from 'console';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,private jwtService: JwtService) {

    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findone(username);
        if (user && user.Password === password) {
            const { Password, UserName, ...rest } = user;
            return rest;
        }
        return null;
    }
    async login(user: any) {
        console.log("datauser", user);

        const payload = { username: user.username, sub: user.userId };
        console.log("daattag", user.username);
        var accessToken = this.jwtService.sign(payload);
        this.userService.updateToken(user.username, accessToken);
        return {
            access_token: accessToken,
        };
      }
}
