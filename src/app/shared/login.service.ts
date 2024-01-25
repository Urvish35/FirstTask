import { Injectable, OnInit } from '@angular/core';

import { UserAuthentication } from "./userAuthentication";

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor() { }

  isUserLogedIn : boolean = true;

  data:UserAuthentication[]=[
    {UserName:"urvish@123",pass:"12345",state:"superAdmin"},
    {UserName:"ronak@123",pass:"12345",state:"Admin"},
    {UserName:"shubham@123",pass:"12345",state:"baseUser"},
    {UserName:"rushi@123",pass:"12345",state:"baseUser"},
    {UserName:"jay@123",pass:"12345",state:"baseUser"}
  ]

  // varData:UserAuthentication[]=[]

  getToken(){
    return localStorage.getItem('token')
  }
  ngOnInit(){
    
  }

  

  
}
