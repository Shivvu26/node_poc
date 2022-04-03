import { Injectable, Inject } from '@nestjs/common';
import { NotificationQueue_REPOSITORY } from '../../core/constants'
import { NotificationQueues } from '../entities/notificationqueue.entity';
import { NotificationQueueService } from './notificationqueue.service'
import * as sgMail from '@sendgrid/mail'
import * as dotenv from 'dotenv'
import { response } from 'express';


@Injectable()
export class EmailService {


    constructor(@Inject(NotificationQueue_REPOSITORY)
    private readonly emailRepository: typeof NotificationQueues) { }



    async sendMail() {

        const API_KEY = process.env.API_KEY;
        sgMail.setApiKey(API_KEY);
  
        const model = await this.emailRepository.findAll({
            where: { statusId: 13 }
        })


        for (let i = 0; i < model.length; i++) {
            const message = {
                to: model[i].toEmail,
                from: process.env.FROM_Email,
                subject: 'Email Trust Otp Verification',
                text: model[i].body,
                html: `<h1> ${model[i].body} </h1>`

            };
            sgMail.send(message)
                .then(response => {
                    model[i].statusId = 14;
                    model[i].save();
                  
                })
                .catch(error => {
                    model[i].statusId = 15;
                    model[i].save();
                    console.log(error);
                })

        }

        console.log(model);


        return 'Email sent';
    }

    async sendMailOtop(otp : number,email : string,name :string) {

        const API_KEY = process.env.API_KEY;
        sgMail.setApiKey(API_KEY);

        //const model = await this.emailRepository.findAll({
        //    where: { statusId: 13 }
        //})


        //for (let i = 0; i < model.length; i++) {
        //    const message = {
        //        to: email,
        //        from: process.env.FROM_Email,
        //        subject: 'Email Trust Otp Verification',
        //        text: model[i].body,
        //        html: `<h1> ${otp} </h1>`

        //    };
        //    sgMail.send(message)
        //        .then(response => {
        //            model[i].statusId = 14;
        //            model[i].save();

        //        })
        //        .catch(error => {
        //            model[i].statusId = 15;
        //            model[i].save();
        //            console.log(error);
        //        })

        //}

        //console.log(model);
        const model = {
            statusId: 14,
            toEmail: email,
            fromEmail: process.env.FROM_Email,
            body: 'Hello' + name + '<br/>  OTP for Email Trust Verification. <br/>' + otp + '<br> Thank you,<br>Email Trust ',
            scheduledDate: new Date(),
            servicedDate: new Date()
        };
        this.emailRepository.create<NotificationQueues>({
            ...model
        });
         //    const message = {
        //        to: email,
        //        from: process.env.FROM_Email,
        //        subject: 'Email Trust Otp Verification',
        //        text: model[i].body,
        //        html: `<h1> ${otp} </h1>`

        //    };
     const message = {
                to: email,
                from: process.env.FROM_Email,
         subject: 'Email Trust Otp Verification',
         text: model.body,
         html: `Hello  ${name}, '<br/>  OTP for Email Trust Verification. <br/><h1> ${otp} </h1><br> Thank you,<br>Email Trust `

        };
        sgMail.send(message)
                .then(response => {

                })
                .catch(error => {
                    console.log(error);
                })
        return 'Email sent';
    }

    async sendMailInviteUser(userTokenId: string, email: string, name: string) {

        const API_KEY = process.env.API_KEY;
        sgMail.setApiKey(API_KEY);

        //const model = await this.emailRepository.findAll({
        //    where: { statusId: 13 }
        //})


        //for (let i = 0; i < model.length; i++) {
        //    const message = {
        //        to: email,
        //        from: process.env.FROM_Email,
        //        subject: 'Email Trust Otp Verification',
        //        text: model[i].body,
        //        html: `<h1> ${otp} </h1>`

        //    };
        //    sgMail.send(message)
        //        .then(response => {
        //            model[i].statusId = 14;
        //            model[i].save();

        //        })
        //        .catch(error => {
        //            model[i].statusId = 15;
        //            model[i].save();
        //            console.log(error);
        //        })

        //}

        //console.log(model);
        const model = {
            statusId: 14,
            toEmail: email,
            fromEmail: process.env.FROM_Email,
            body: 'Hello' + name + `<br/>You are invited for the Email Trust <br/><a href="http://localhost:4200/createPassword/${userTokenId}">click here</a>   <br/>` + '<br> Thank you,<br>Email Trust ',
            scheduledDate: new Date(),
            servicedDate: new Date()
        };
        this.emailRepository.create<NotificationQueues>({
            ...model
        });
        //    const message = {
        //        to: email,
        //        from: process.env.FROM_Email,
        //        subject: 'Email Trust Otp Verification',
        //        text: model[i].body,
        //        html: `<h1> ${otp} </h1>`

        //    };
        const message = {
            to: email,
            from: process.env.FROM_Email,
            subject: 'Email Trust Otp Verification',
            text: model.body,
            html: 'Hello' + name + `<br/>You are invited for the Email Trust <br/><a href="http://localhost:4200/createPassword/${userTokenId}">click here</a>   <br/>` + '<br> Thank you,<br>Email Trust ',

        };
        sgMail.send(message)
            .then(response => {

            })
            .catch(error => {
                console.log(error);
            })
        return 'Email sent';
    }

}