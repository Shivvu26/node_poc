import { Controller, Post, Get, Request } from '@nestjs/common';
import { OrganizationService } from '../Services/organization.service';


@Controller('organization')

export class OrganizationController {
    constructor(
        private readonly organizationService: OrganizationService) {

    }

    @Get('list')
    getOrganizationList(): any {

        return this.organizationService.getOrganizationList();
    }

}


