import { EmailAttatchment_REPOSITORY } from '../../core/constants';
import { EmailAttatchment } from '../entities/emailattatchment.entity';

export const questionProviders = [{
    provide: EmailAttatchment_REPOSITORY,
    useValue: EmailAttatchment,
}];