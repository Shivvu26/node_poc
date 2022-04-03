import { UserOtp_REPOSITORY, Users_REPOSITORY } from '../../core/constants';
import { UserOtp } from '../Entities/userotp.entity';
import { Users } from '../Entities/users.entity';


export const userOtpProviders = [{
    provide: UserOtp_REPOSITORY,
    useValue: UserOtp,
}];