import { Module } from '@nestjs/common';
import { OrganizationController } from './Controller/organization.controller';
import { OrganizationSaveModel } from './Models/organizationSaveModel.model';
import { organizationRoleUsersProviders } from './Repositories/organizationroleuser.provider';
import { organizationProviders } from './Repositories/organizations.provider';
import { OrganizationService } from './Services/organization.service';

@Module({
    
    providers: [OrganizationService,...organizationProviders,...organizationRoleUsersProviders],
    exports: [OrganizationService],
    controllers:  [OrganizationController],

})
export class OrganizationModule {

}
