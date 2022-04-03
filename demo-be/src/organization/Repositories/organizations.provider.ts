import {   Organization_REPOSITORY } from '../../core/constants';
import { Organizations } from '../Entities/organization.entity';


export const organizationProviders = [{
    provide: Organization_REPOSITORY,
    useValue: Organizations,
}];