import { UserAuthentication } from 'src/app/shared/userAuthentication';
import { BranchItem, HomeItem } from '../homeShared/homeItem';
import { HomeDataService } from './../homeShared/home-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit{

  dataArray:any[]=[]
  EditArray:any[]=[]
  // value:HomeItem[]=[]
  data:any;
  hello:any;
  id:number=0;
  deleteId:number=0;
  isShow:boolean=true;
  isUpdate:boolean=false;
  // isPermission:any;
  constructor(private service:HomeDataService,private curRoute:ActivatedRoute,private ls:LoginService){
    
  }


  ngOnInit(){
    this.dataArray=this.service.branchDetail;
    this.hello=localStorage.getItem('keyPass')
    this.data=JSON.parse(this.hello);
    console.log(this.data);
    this.isShow==true;
    // this.isPermission= this.curRoute.snapshot.data['Permissions']
    // console.log(this.isPermission)
    // this.ls.routeData(this.isPermission);
  }

  deleteOpp(data:HomeItem){
    this.deleteId = this.service.branchDetail.findIndex((ele)=>{
      return ele.BranchId === data.BranchId && ele.BranchName === data.BranchName
      })
      if(!this.isUpdate){
        // this.isShow=false;
        this.service.deleteFunBranch(this.deleteId);
      }
      // else{
        
      //   // this.service.deleteFunBranch(this.deleteId);
      // }
  }
  

  onEditData(val:HomeItem){
    this.id = this.service.branchDetail.findIndex((ele)=>{
    return ele.BranchId === val.BranchId && ele.BranchName === val.BranchName
    })
    this.EditArray.push(val);
    this.isShow=true;

    if(this.EditArray.length>1){
      this.EditArray.shift();
    }
    this.isUpdate=true;
  }

  formEditData(BranchId:string,BranchName:string){
    this.service.editFunBranch(BranchName,BranchId,this.id);
    this.isShow=!this.isShow
    this.EditArray=[]
    this.isUpdate=false;
  }

}
