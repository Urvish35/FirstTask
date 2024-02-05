import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { HomeDataService } from '../homeShared/home-data.service';
import { Router } from '@angular/router';
import { BranchItem, HomeItem, allInfo } from '../homeShared/homeItem';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit{

  userDataArr:allInfo[]=[]
  // userAllDataArr:allInfo[]=[];
  // mainArr:any[]=this.dataService.favVal
  // id:any;

  constructor(private dataService:HomeDataService,private router:Router){}

  ngOnInit(){
    debugger
    // console.log("hello",this.dataService.favouriteData);
    this.dataService.favouriteAllData.pipe(
      map((n)=>{
      if(n.Id=="2"){
        alert("your favourite user with id 2")
        return n;
      }
      return n;
    })).subscribe((item:allInfo)=>{
      this.userDataArr.push(item)
      // console.log("dataArray",this.userDataArr) 
    })

    // this.dataService.userDetail.filter((item:any)=>{
    //   if(item.BranchId==this.id){
    //     this.mainArr.push(item);
    //   }
    // })
    
  }

  // ngDoCheck(): void {
  //   this.userAllDataArr= this.dataService.userArr

    

  //   this.dataService.favouriteAllData.pipe(
  //     map((n)=>{
  //     if(n.Id=="2"){
  //       alert("your id 2")
  //       return n
  //     }
  //     return n
  //   }))
  //     .subscribe((item:any)=>{
  //     debugger
  //     this.userAllDataArr.push(item)
  //     // this.dataService.favVal.push(this.userAllDataArr)
  //     // console.log("dataArray",this.userDataArr)
  //     this.dataService.reciveVal(item)
  //   })
  // }

}




