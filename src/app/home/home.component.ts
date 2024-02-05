import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { HomeDataService } from './homeShared/home-data.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  showLoader:boolean=false;
  
  constructor(private router:Router,private sr:LoginService,private hds:HomeDataService){
    sr.isUserLogedIn=false;
   
  }
  
  logoutFun(){
    this.hds.logout()
    this.router.navigate(['form'])
  }

  favouriteFun(){
    this.router.navigate(['/favourite'])
  }

  addUserFun(){
    this.router.navigate(['userdata'])
  }

  ngOnInit(){
    this.router.events.subscribe((routerEvent)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoader = true;
      }

      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        this.showLoader = false;
      }
    })
}
}
