import { UserAuthentication } from 'src/app/shared/userAuthentication';
import { BranchItem, HomeItem } from '../homeShared/homeItem';
import { HomeDataService } from './../homeShared/home-data.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private service:HomeDataService){
    
  }


  ngOnInit(){
    this.dataArray=this.service.branchDetail;
    this.hello=localStorage.getItem('keyPass')
    this.data=JSON.parse(this.hello);
    console.log(this.data);
    this.isShow==true;
  }

  deleteOpp(data:HomeItem){
    this.deleteId = this.service.branchDetail.findIndex((ele)=>{
      return ele.BranchId === data.BranchId && ele.BranchName === data.BranchName
      })
    this.service.deleteFunBranch(this.deleteId);
  }
  

  onEditData(val:HomeItem){
    this.id = this.service.branchDetail.findIndex((ele)=>{
    return ele.BranchId === val.BranchId && ele.BranchName === val.BranchName
    })
    this.EditArray.push(val);
    this.isShow=true;
  }

  formEditData(BranchId:string,BranchName:string){
    this.service.editFunBranch(BranchName,BranchId,this.id);
    this.isShow=!this.isShow
    this.EditArray=[]
  }

}
