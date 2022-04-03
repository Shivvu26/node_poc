import { Inject, Injectable, Type } from '@nestjs/common';
import { Op } from 'sequelize';
import { values } from 'sequelize/types/lib/operators';
import { OrganizationRoleUsers_REPOSITORY, Organization_REPOSITORY } from 'src/core/constants';
import { Organizations } from '../Entities/organization.entity';
import { OrganizationRoleUsers } from '../Entities/organizationroleuser.entity';
import { OrganizationInviteSaveModel, OrganizationSaveModel } from '../Models/organizationSaveModel.model';

@Injectable()
export class OrganizationService {
   
constructor(
    @Inject(Organization_REPOSITORY)
private readonly organizationRepository: typeof Organizations,
   @Inject(OrganizationRoleUsers_REPOSITORY)
   private readonly organizationRoleUserRepository:typeof OrganizationRoleUsers,


    ) { }
    async saveUser(saveAnswerModel: OrganizationSaveModel): Promise<number> {
        const deleted = false;
        var organizationId = 0;
        var nowdate = new Date();
        var nerdate = new Date();
        const organizationSaveDataModel = {
            Name: saveAnswerModel.organizationName,
            Alias: saveAnswerModel.organizationName
        }

        console.log("organizationData", saveAnswerModel);
        await this.organizationRepository.create<Organizations>({
            deleted,
            ...organizationSaveDataModel, nowdate, nerdate,
        }).then(result => organizationId = result.Id,);
        const model = {
            IsDeleted: deleted,
            OrganizationId: organizationId,
            UserId: saveAnswerModel.userId,
            RoleId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        await this.organizationRoleUserRepository.create<OrganizationRoleUsers>({
            ...model
        })
        return organizationId;
    }
    async InviteSaveUser(saveAnswerModel: OrganizationInviteSaveModel): Promise<number> {
        const deleted = false;
        var organizationId = 0;
        var nowdate = new Date();
        var nerdate = new Date();
        const inviteByUserModel = await this.organizationRoleUserRepository.findOne({
            where: { UserId: saveAnswerModel.InviteByUserId }
        });
        const model = {
            IsDeleted: deleted,
            OrganizationId: inviteByUserModel.OrganizationId,
            UserId: saveAnswerModel.userId,
            RoleId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        await this.organizationRoleUserRepository.create<OrganizationRoleUsers>({
            ...model
        })
        return organizationId;
    }
    async getRoleId(userId: number): Promise<number> {
        let values = 0;
        await this.organizationRoleUserRepository.findOne({
            where: {
                [Op.and]: [
                    { IsDeleted: false },
                    { UserId: userId }
                ]
            }
        }).then(roleFeature => {
            values = roleFeature.RoleId
            })
            // console.log("userinvtedetails", resObj, users)
            //JSON.stringify(resObj);
    return values;

    }
    async getOrganizationName(userId: number): Promise<string> {
        let values = 0;
        await this.organizationRoleUserRepository.findOne({
            where: {
                [Op.and]: [
                    { IsDeleted: false },
                    { UserId: userId }
                ]
            }
        }).then(roleFeature => {
            values = roleFeature.OrganizationId
        })
        // console.log("userinvtedetails", resObj, users)
        //JSON.stringify(resObj);
        var organizationData=await this.organizationRepository.findOne({
            where: { Id: values }

        })
        return organizationData.Name;
    }
    async getOrganizationList(): Promise<any> {
        return await this.organizationRepository.findAll({
            where: {
                [Op.and]: [
                    { IsDeleted: false },
                ]
            }
        });
    }

}
