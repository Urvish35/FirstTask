import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';
import { SignInAuthentication } from 'src/app/shared/userAuthentication';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private service:LoginService,private router:Router){
  }

  sameId:boolean=true;

  passData(val:SignInAuthentication){

    this.service.data.filter(item=>{
      if((val.UserName==item.UserName)){
        this.sameId=false;
      }
    })

    if(val.pass==val.cfpass && this.sameId){
      this.service.data.push(val);
      this.router.navigate(['/']);
    }
    else{
      alert("something went wrong")
    }
  }
}
