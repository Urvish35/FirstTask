import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { HomeDataService } from "./home-data.service";

export const canResolve=()=>{

    const ls=inject(HomeDataService);

    return ls.getData();

}