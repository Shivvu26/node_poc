import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class UserLogins extends Model<UserLogins> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    Id: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    IsDeleted: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    UserName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Salt: string;
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    IsActive: boolean;
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    IsConfirm: boolean;
    @Column({
        type: DataType.STRING,
        defaultValue: false,
    })
    LoginToken: string;
}
