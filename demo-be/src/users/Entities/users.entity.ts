import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";

@Table
export class Users extends Model<Users> {
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
        allowNull: true,
    })
    Name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    Email: string;

    @Column({
        type: DataType.BIGINT,
        allowNull: true,
    })
    PhoneNo: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    CountryName: string;

}
