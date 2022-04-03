import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { SessionSerializer } from './session.serializer';
import { jwtConstants } from './auth.constant';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [UsersModule, PassportModule,JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '3600s' },
      }),],
    providers: [AuthService, LocalStrategy,JwtStrategy,SessionSerializer],
        exports: [AuthService],

})
export class AuthModule {}
