import { Injectable, OnInit } from '@angular/core';

import { UserAuthentication } from "./userAuthentication";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor(private route:ActivatedRoute) { }

  isUserLogedIn : boolean = true;
  StringState:any;
  state:any;
  permission:string[]=[]

  data:UserAuthentication[]=[
    {UserName:"urvish@123",pass:"12345",state:"superAdmin"},
    {UserName:"ronak@123",pass:"12345",state:"Admin"},
    {UserName:"shubham@123",pass:"12345",state:"baseUser"},
    {UserName:"rushi@123",pass:"12345",state:"baseUser"},
    {UserName:"jay@123",pass:"12345",state:"baseUser"}
  ]


  getToken(){
    return localStorage.getItem('token')
  }

  // stateCheck(){
  //   this.StringState= localStorage.getItem('keyPass');
  //   this.state=JSON.parse(this.StringState)
  //   console.log(this.StringState);
  //   console.log(this.state.state);
    
  //   return this.state.state;
  // }

  ngOnInit(){
    
  }

  

  

  
}
