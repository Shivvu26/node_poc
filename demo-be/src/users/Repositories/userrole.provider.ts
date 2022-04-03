import {  UserRoles_REPOSITORY } from '../../core/constants';
import { UserRoles } from '../Entities/userrole.entity';


export const userroleProviders = [{
    provide: UserRoles_REPOSITORY,
    useValue: UserRoles,
}];