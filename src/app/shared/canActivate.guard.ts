import { inject } from "@angular/core"
import { LoginService } from "./login.service"
import { Router } from "@angular/router"

export const CanActivate = ()=>{

    const ls  = inject(LoginService)
    const rt = inject(Router);

    if(ls.getToken() === '"AuthKey"'){
        rt.navigate(['home'])
        return false;
    }
    else{
        return true;
    }
}