import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Organizations extends Model<Organizations> {
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
    Name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Alias: string;
}
