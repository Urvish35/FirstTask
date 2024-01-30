import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { HomeDataService } from "./home-data.service";

export const CanDeactivate = ()=>{

    const ls  = inject(HomeDataService)
    const rt = inject(Router);

    if(ls.getToken() === '"AuthKey"'){
        // rt.navigate(['/home'])
        return true;
    }
    else{
        rt.navigate(['form/signIn'])
        
        return false;
    }
}