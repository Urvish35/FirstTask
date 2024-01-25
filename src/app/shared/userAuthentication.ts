export class UserAuthentication {
    public UserName: string;
    public pass: string;
    public state: string;

    constructor(UserName: string, pass: string, state: string){
        this.UserName=UserName;
        this.pass=pass;
        this.state=state;
    }
}
