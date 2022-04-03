import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class UserOtp extends Model<UserOtp> {
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
        type: DataType.INTEGER,
        allowNull: false,
    })
    UserId: string;

    @Column({
        type: DataType.BIGINT,
        allowNull: false,
    })
    Otp: number;

}
