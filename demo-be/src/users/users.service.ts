import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { IsNull } from 'sequelize-typescript';
import { OrganizationService } from 'src/organization/Services/organization.service';
import { Features_REPOSITORY, RoleFeature_REPOSITORY, UserInvite_REPOSITORY, UserLogins_REPOSITORY, UserOtp_REPOSITORY, UserRoles_REPOSITORY, Users_REPOSITORY } from '../core/constants';
import { EmailService } from '../email-trigger/services/email.service';
import { UserLogins } from './Entities/userlogin.entity';
import { UserOtp } from './Entities/userotp.entity';
import { Users } from './Entities/users.entity';
import { SaveUserInviteModel } from './Models/userinvitemodel.model';
import { OtpValidateModel, UserLoginPasswordModel } from './Models/userloginsave.model';
import { SaveUserModel } from './Models/usersave.model';
import * as moment from 'moment';
import { and, Op, Sequelize } from 'sequelize';
import { Console } from 'console';

import { UserRoles } from './Entities/userrole.entity';
import sequelize from 'sequelize';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}


@Injectable()
export class UsersService {
 
constructor(
    @Inject(Users_REPOSITORY)
private readonly userRepository: typeof Users,
    @Inject(UserOtp_REPOSITORY)
    private readonly userOtpRepository: typeof UserOtp,
    @Inject(UserLogins_REPOSITORY)
    private readonly userLoginRepository: typeof UserLogins,
    @Inject(UserRoles_REPOSITORY)
    private readonly userRolesRepository: typeof UserRoles,

    private readonly emailService: EmailService,
    private readonly organizationService :OrganizationService

    ) { }
    async findone(username: string): Promise<UserLogins | undefined> {
        const model = await this.userLoginRepository.findOne({
            where: { UserName: username.toLowerCase() }
        })
        console.log("daattag",model);
        return model;
    }
    async updateToken(userName: any, token: string): Promise<boolean | undefined> {
        console.log("userdata", userName);
        const model = await this.userLoginRepository.findOne({
            where: { UserName: userName.toLowerCase() }
        })
        model.LoginToken = token;
        model.save();
        return true;
    }

    async getUserDetails(token: string): Promise<UserLogins | undefined> {
        console.log("userdetails", token);
        const model = await this.userLoginRepository.findOne({
            where: { LoginToken: token }
        });
        return model;
    }
    async getUserData(id: any): Promise<any | undefined> {
        const model = await this.userRepository.findOne({
            where: { Id: id }
        });
        const model2 = await this.userLoginRepository.findOne({
            where: {Id:id}
        })
        const modelSent = {
            Name: model.Name,
            Email: model.Email,
            PhoneNo: model.PhoneNo,
            CountryName: model.CountryName,
            Password: model2.Password,
        }
        return modelSent;
    }
    async sendOtp(name: string, username: string, userId: number): Promise<boolean | undefined> {
        
        var otpGenereate = Math.floor(100000 + Math.random() * 900000);
        const modelSave = {
            IsDeleted: false,
            UserId: userId,
            Otp: otpGenereate,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        await this.userOtpRepository.create<UserOtp>({
            ...modelSave
        })
        await this.emailService.sendMailOtop(otpGenereate, username, name);

        return true;
    }
    async saveUser(saveAnswerModel: SaveUserModel): Promise<number> {
        const deleted = false;
        var userId = 0;
        var nowdate = new Date();
        var nerdate = new Date();
        if (saveAnswerModel.id > 0) {
            const model = await this.userRepository.findOne({
                where: { Id: saveAnswerModel.id }
            });
            const model2 = await this.userLoginRepository.findOne({
                where: { Id: saveAnswerModel.id }
            })
           

            model.Name = saveAnswerModel.name,
                model.Email = saveAnswerModel.email.toLowerCase(),
                model.PhoneNo = saveAnswerModel.phoneNo,
                model.CountryName = saveAnswerModel.countryName,

                model.save();
            model2.UserName = model.Email.toLowerCase();
            model2.Password = saveAnswerModel.password;
            model2.save();
            return model.Id;

        }
       
        const saveUserDetails = {
            Name: saveAnswerModel.name,
            Email: saveAnswerModel.email.toLowerCase(),
            PhoneNo: saveAnswerModel.phoneNo,
            CountryName: saveAnswerModel.countryName,
        }
        await this.userRepository.create<Users>({
            deleted,
            ...saveUserDetails, nowdate, nerdate,
        }).then(result => userId = result.Id,);
        var otpGenereate = Math.floor(100000 + Math.random() * 900000);
        console.log("otp", otpGenereate, userId)
        const model = {
            IsDeleted: deleted,
            UserId: userId,
            Otp: otpGenereate,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        await this.userOtpRepository.create<UserOtp>({
            ...model
        })
        const organizationModel = 
        {
            userId:userId,
            organizationName : saveAnswerModel.companyName
        };
        await this.organizationService.saveUser(organizationModel);
        await this.emailService.sendMailOtop(otpGenereate, saveUserDetails.Email, saveUserDetails.Name);
        return userId;
    }

    async createPassword(userLoginModel: UserLoginPasswordModel): Promise<boolean> {
       
            var model = await this.userRepository.findOne({
                where: { Id: userLoginModel.userId }
            })
            console.log("userDetaisl", userLoginModel);
            const userLoginModelLocal = {
                Id: userLoginModel.userId,
                IsDeleted: false,
                UserName: model.Email,
                Password: userLoginModel.password,
                Salt: '',
                IsActive: false,
                IsConfirm: false,
                LoginToken: '',
                createdAt: new Date(),
                updatedAt: new Date(),
            }


            this.userLoginRepository.create<UserLogins>({
                ...userLoginModelLocal
            });
            return true;
        
    }
    async otpValidate(otpValidateModel: OtpValidateModel): Promise<any> {
        console.log("userotpdate",otpValidateModel)
        const model = await this.userOtpRepository.findOne({
            where: { UserId: otpValidateModel.userId,Otp : otpValidateModel.otp  }
        })
    
        console.log("validateotpdate",model)

        if(model!=null){
            const response ={
                userId : otpValidateModel.userId,
                isValid : true
            }
            model.IsDeleted = true;
            model.save();
            return response;

        }
        else{
            const response ={
                userId : otpValidateModel.userId,
                isValid : false
            } 
            return response;

        }
    }

    async getUserRoles(): Promise<any> {
        return await this.userRolesRepository.findAll({
            where: {
                [Op.and]: [
                    { IsDeleted: false }
                ]
            }
        });

    }
    async getUserList(): Promise<any> {
        let values = [];
        await this.userRepository.findAll({
            where: { IsDeleted: false }
        }).then(users => {
            values = users.map(user => {
                return Object.assign({

                },
                    {
                        Id: user.Id,
                        Name: user.Name,
                        Role:'',
                        CompanyName: '',
                        CreatedDate: user.createdAt,
                        email: user.Email,
                        /* lastLogin: Date,*/
                        memberType: null,
                        status: 'Active',
                    }
                )
            })
            // console.log("userinvtedetails", resObj, users)
            //JSON.stringify(resObj);
        });
        for (var i = 0; i < values.length; i++) {

            values[i].Role = await  this.getRoleNameById(values[i].Id);
            values[i].CompanyName = await this.organizationService.getOrganizationName(values[i].Id);
            console.log("userLIst1", values);


        }
        console.log("userLIst2", values);
        return values;

    }
    async getRoleNameById(userid: number): Promise<string> {
        let roleId = await this.organizationService.getRoleId(userid);
        var userdata = await this.userRolesRepository.findOne({
            where: { Id: roleId }

        })
        return userdata.Name;
    }
    async isEmailExist(email: string) {
        const emailExists =  await this.userLoginRepository.findOne({
            where: {
                [Op.and]: [
                    { IsDeleted: false },
                    { UserName: email.toLowerCase() }
                ]
            }
        });
        if (emailExists) {
            return true;
        }
        else {
            return false;
        }
    }
}


