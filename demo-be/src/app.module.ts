import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './core/database/database.module';
import { EmailTriggerModule } from './email-trigger/email-trigger.module';
// import {EmailSchedulingService} './jobs/services/emailschedule.service'
import { ScheduleModule } from '@nestjs/schedule';
import { usersProviders } from './users/Repositories/users.provider';
import { userLoginsProviders } from './users/Repositories/userlogins.provider';
import { userOtpProviders } from './users/Repositories/userotp.provider';
import { JwtService } from '@nestjs/jwt';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    UsersModule,
    AuthModule,
    DatabaseModule,
    EmailTriggerModule,
    OrganizationModule,
    
  ],
  controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
