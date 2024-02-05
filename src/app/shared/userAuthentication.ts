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


export class SignInAuthentication {
    public UserName: string;
    public pass: string;
    public cfpass: string;
    public state: string;

    constructor(UserName: string, pass: string, cfpass: string, state: string){
        this.UserName=UserName;
        this.pass=pass;
        this.cfpass=cfpass;
        this.state=state;
    }
}