
import { NotificationQueue_REPOSITORY } from '../../core/constants';
import { NotificationQueues } from '../entities/notificationqueue.entity';

export const notificationqueueProviders = [{
    provide: NotificationQueue_REPOSITORY,
    useValue: NotificationQueues,
}];