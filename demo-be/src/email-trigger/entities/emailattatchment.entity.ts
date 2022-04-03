import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';


@Table
export class EmailAttatchment extends Model<EmailAttatchment>{

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
    emailId;


    @Column({
        type: DataType.INTEGER,
    })
    feildId;
}