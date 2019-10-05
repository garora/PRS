export class Users {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;

    constructor (id:number = 0, username:string = '' , password: string = '' ,
    firstname: string = '' , lastname: string = '' , phone: string = '' ,  
    email: string = '' , isReviewer: boolean=false, isAdmin: boolean=false ){

    this.id=id;
    this.username = username;
    this.firstname = firstname;
    this.lastname=lastname;
    this.phone=phone;
    this.email=email;
    this.isReviewer=isReviewer;
    this.isAdmin=isAdmin;}

    about(): string {
        return `Users: id = ${this.id}, username = ${this.username}, password = ${this.password}, ` +
        `firstName = ${this.firstname}, lastName = ${this.lastname}, phone = ${this.phone}, ` +
        `email = ${this.email}, isReviewer = ${this.isReviewer}, isAdmin = ${this.isAdmin}`;  
    }
}
