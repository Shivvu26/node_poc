import { Injectable, Inject } from '@nestjs/common';
import { NotificationQueue_REPOSITORY } from '../../core/constants'
import { NotificationQueues } from '../entities/notificationqueue.entity'


@Injectable()
export class NotificationQueueService {

    constructor(@Inject(NotificationQueue_REPOSITORY)
    private readonly emailRepository: typeof NotificationQueues
    ) { }



    async setQueue() {

        const model = {
            statusId: 13,
            toEmail: 'mohammad.asif@taazaa.com',
            fromEmail: process.env.FROM_Email,
            body: 'Hello (User) <br/> Thank you for contacting MAS Team, We hope your query is resolved. Please click on the link below to find a copy of response from our Chatbot. <br/> <a href=”https://qa-feedback.medanswering.com/”>https://qa-feedback.medanswering.com/</a>  <br> Thank you,<br>MAS Team ',
            scheduledDate: new Date(),
            servicedDate: new Date()
        };
        this.emailRepository.create<NotificationQueues>({
            ...model
        });
        return 'Email inserted in database';
    }

}