import { Module } from '@nestjs/common';
import { EmailTriggerModule } from 'src/email-trigger/email-trigger.module';
import { OrganizationModule } from 'src/organization/organization.module';
import { UserController } from './Controllers/user.controller';
import { userLoginsProviders } from './Repositories/userlogins.provider';
import { userOtpProviders } from './Repositories/userotp.provider';
import { userroleProviders } from './Repositories/userrole.provider';
import { usersProviders } from './Repositories/users.provider';
import { UsersService } from './users.service';

@Module({
    imports: [
     
        EmailTriggerModule,OrganizationModule
        
      ],
    providers: [UsersService, ...usersProviders,
        ...userOtpProviders, ...userLoginsProviders, ...userroleProviders],
    controllers: [UserController],
    exports: [UsersService],

})
export class UsersModule {}
