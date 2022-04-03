export class NotificationQueueDto {
    readonly id: number;
    readonly statusId: number;
    readonly sendingEmail: string;
    readonly fromEmail: string;
    readonly body: string
}