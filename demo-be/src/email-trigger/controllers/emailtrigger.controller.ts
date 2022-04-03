import { HttpStatus, Res } from '@nestjs/common';
import { Controller, Post, Get, Request } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { NotificationQueueService } from '../services/notificationqueue.service'
// import {EmailSchedulingService} from '../../jobs/services/emailschedule.service'
@Controller('send')

export class EmailController {
    constructor(private emailService: NotificationQueueService) {

    }

    @Get()
    sendEmail(): any {
        return this.emailService.setQueue();
    }

}