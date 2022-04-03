import {  OrganizationRoleUsers_REPOSITORY } from '../../core/constants';
import { OrganizationRoleUsers } from '../Entities/organizationroleuser.entity';


export const organizationRoleUsersProviders = [{
    provide: OrganizationRoleUsers_REPOSITORY,
    useValue: OrganizationRoleUsers,
}];