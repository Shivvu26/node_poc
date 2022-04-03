import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";

@Table
export class UserRoles extends Model<UserRoles> {
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
    Description: string;

}
