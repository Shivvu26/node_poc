import {  UserLogins_REPOSITORY } from '../../core/constants';
import { UserLogins } from '../Entities/userlogin.entity';


export const userLoginsProviders = [{
    provide: UserLogins_REPOSITORY,
    useValue: UserLogins,
}];