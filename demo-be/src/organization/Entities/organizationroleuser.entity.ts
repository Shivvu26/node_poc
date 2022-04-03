import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class OrganizationRoleUsers extends Model<OrganizationRoleUsers> {
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
    OrganizationId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    UserId: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    RoleId: number;
}
