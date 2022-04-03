import { Users_REPOSITORY } from '../../core/constants';
import { Users } from '../Entities/users.entity';


export const usersProviders = [{
    provide: Users_REPOSITORY,
    useValue: Users,
}];