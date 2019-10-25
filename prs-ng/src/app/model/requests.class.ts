import { Users } from './users.class';


export class Requests {
    id: number;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string;
    status: string;
    total: number;
    userId: number;
    user: Users;

    constructor(id: number = 0, description: string = '' , justification: string = '' , rejectionReason: string = '' ,
                deliveryMode: string = '' , status: string = '' , total: number = 0, userId: number = 0, user: Users = new Users() ) {

    this.id = id;
    this.description = description;
    this.justification = justification;
    this.rejectionReason = rejectionReason;
    this.deliveryMode = deliveryMode;
    this.status = status;
    this.total = total;
    this.userId = userId;
    this.user = user;
    }

    about(): string  {
        return 'Request: id' + this.id + ', description=' + this.description + ', justification=' + this.justification + ', rejectionReason=' + this.rejectionReason
        + ' deliveryMode=' + this.deliveryMode + ',  status=' + this.status + ', total=' + this.total + ', userId=' + this.userId
        + ',  user=' + this.user;
    }
}
