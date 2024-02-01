import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'FirstTask';

  showLoader:boolean = false;

  constructor(private router:Router){}

  // ngOnInit(){
  //   this.router.events.subscribe((routerEvent)=>{
  //     if(routerEvent instanceof NavigationStart){
  //       this.showLoader = true;
  //     }

  //     if(routerEvent instanceof NavigationEnd){
  //       this.showLoader = false;
  //     }
  //   })
  // }
}
