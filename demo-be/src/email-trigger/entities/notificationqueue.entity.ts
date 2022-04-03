import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';


@Table
export class NotificationQueues extends Model<NotificationQueues>{

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    statusId;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    toEmail;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    fromEmail;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    body;
    @Column({
        type: DataType.DATE,
    })
    scheduledDate;
    @Column({
        type: DataType.DATE,
    })
    servicedDate;
}