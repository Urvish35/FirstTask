import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HomeDataService } from './homeShared/home-data.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private rt:Router,private sr:LoginService,private hds:HomeDataService){
    sr.isUserLogedIn=false;
    const val = "returnToken"
        localStorage.setItem('return', JSON.stringify(val))
  }
  
  logoutFun(){
    this.hds.logout()
  }
}
