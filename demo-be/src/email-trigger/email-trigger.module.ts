import { Module } from '@nestjs/common';
import { NotificationQueueService } from './services/notificationqueue.service';
import { EmailController } from './controllers/emailtrigger.controller';
import { notificationqueueProviders } from './Repositories/email.providers';
import { EmailService } from './services/email.service';


@Module({
  providers: [
    NotificationQueueService,
    EmailService,
    ...notificationqueueProviders
  ],
  controllers: [EmailController],
  exports:[EmailService,NotificationQueueService]
})


export class EmailTriggerModule { }
