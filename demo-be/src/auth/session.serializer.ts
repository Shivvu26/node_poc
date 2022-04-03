import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
@Injectable()
export class SessionSerializer extends PassportSerializer {
    //before goes to the session we have to serailize the user object
    serializeUser(user: any, done: (err: Error, user: any) => void): any {
        done(null,user);
    }
    //out of the session we have to deserailize the user object

    deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
        done(null, payload);
    }
}