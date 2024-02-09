import { UserAuthentication } from 'src/app/shared/userAuthentication';
import { BranchItem, HomeItem, allInfo } from '../homeShared/homeItem';
import { HomeDataService } from './../homeShared/home-data.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit{

  @Input() search:any

  dataArray:BranchItem[]=[]
  EditArray:BranchItem[]=[]
  // value:HomeItem[]=[]
  data:any;
  stringData:string | null ='';
  id:number=0;
  deleteId:number=0;
  isShow:boolean=true;
  isUpdate:boolean=false;
  AddInfoBtn:boolean=false;
  // isPermission:any;
  constructor(private service:HomeDataService,private curRoute:ActivatedRoute,private ls:LoginService){
   
    this.dataArray=this.curRoute.snapshot.data['val']
    
    
  }


  ngOnInit(){
    // this.dataArray=this.service.branchDetail;

    this.stringData=localStorage.getItem('keyPass')
    if(this.stringData){
      this.data=JSON.parse(this.stringData);
    }

    // console.log("data",this.data);
    this.isShow==true;
    // this.isPermission= this.curRoute.snapshot.data['Permissions']
    // console.log(this.isPermission)
    // this.ls.routeData(this.isPermission);
  }

  deleteOpp(data:BranchItem){
    this.deleteId = this.service.branchDetail.findIndex((ele)=>{
      return ele.BranchId === data.BranchId && ele.BranchName === data.BranchName
      })
      if(this.isUpdate){
        this.isShow=false;
        this.service.deleteFunBranch(this.deleteId);
      }
      else{
        
        this.service.deleteFunBranch(this.deleteId);
      }
  }
  

  onEditData(val:BranchItem){
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

  addFavourite(val:BranchItem){
    // this.service.recieveData(val)
    this.service.userDetail.filter(item=>{
      if(item.Id==val.BranchId){
        this.service.recieveAllData(item)
      }
    })
  }


  AddInfoClick(){
    this.AddInfoBtn=true;
  }

}
