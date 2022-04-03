import { CanActivate, Injectable, ExecutionContext } from "@nestjs/common";
@Injectable()
export class AuthenticatedGuard implements CanActivate {
    // grabbing request from the context
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        return request.isAuthenticated();     // if there is an existing session for this user
        
    }
}