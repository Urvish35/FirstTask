import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { UserAuthentication } from '../shared/userAuthentication';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private rt: Router, private service: LoginService) {
    localStorage.removeItem('return')
  }



  passData(val: UserAuthentication) {

    this.service.data.filter(item => {
      if (val.UserName == item.UserName && val.pass == item.pass) {
        // console.log("hello");
        const tokenkey = "AuthKey"
        localStorage.setItem('keyPass', JSON.stringify(item))
        localStorage.setItem('token', JSON.stringify(tokenkey))
        this.rt.navigate(['home'])
        //this.service.isUserLogedIn = true;
      }
    })

  }
}


