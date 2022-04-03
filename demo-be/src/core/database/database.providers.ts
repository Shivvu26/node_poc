import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../constants';
import { databaseConfig } from './database.config';
import { NotificationQueues } from '../../email-trigger/entities/notificationqueue.entity';
import { UserLogins } from '../../users/Entities/userlogin.entity';
import { Users } from '../../users/Entities/users.entity';
import { UserOtp } from '../../users/Entities/userotp.entity';
import { Organizations } from 'src/organization/Entities/organization.entity';
import { OrganizationRoleUsers } from 'src/organization/Entities/organizationroleuser.entity';
import { UserRoles } from '../../users/Entities/userrole.entity';


export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      config = databaseConfig;
      console.log(config);
      const sequelize = new Sequelize(config);

        sequelize.addModels([
            UserLogins,
            Users,
            UserOtp,
            NotificationQueues,
            Organizations,
            OrganizationRoleUsers,
            UserRoles,
            

      ]);
        await sequelize.sync();

      return sequelize;
    },
  },
];
