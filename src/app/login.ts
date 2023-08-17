export class Login {

    mobileno:string;
    password:string;
    roles:string;

    constructor(mobileno:string, password:string,roles:string){
       this.mobileno=mobileno;
       this.password=password;
       this.roles=roles;
    }
}
