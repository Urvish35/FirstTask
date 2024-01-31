import { Injectable, inject } from "@angular/core"
import { LoginService } from "./login.service"
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router";


export const CanPermission=( route:ActivatedRouteSnapshot)=>{
    const ls=inject(LoginService);
    const rt=inject(Router);
    // let art=inject(ActivatedRoute);
    let permissionArr:string[]=route.data['Permissions']
    let userCheck:any=sessionStorage.getItem('role');
    let val:any=JSON.parse(userCheck)
    console.log(permissionArr)
    console.log(val)

    
    if(permissionArr.includes(val)){
        // alert('you ar allowed')
        return true;
    }
    else{
        alert('you are not allowed')
        // rt.navigate(['/home'])
        return false;
    }
}




