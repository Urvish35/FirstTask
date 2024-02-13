import { Component, Input, OnInit } from '@angular/core';
import { HomeItem, allInfo, companyItem } from '../homeShared/homeItem';
import { HomeDataService } from '../homeShared/home-data.service';
import { LoginService } from 'src/app/shared/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{

  @Input() search:any

  dataArray:companyItem[]=[]
  EditArray:companyItem[]=[]
  data:any;
  stringData:string | null ='';
  id:number=0;
  deleteId:number=0;
  isShow:boolean=true;
  isUpdate:boolean=false;
  userDataFlag:boolean=false;
  userData:any
  // isPermission:any;
  constructor(private service:HomeDataService,private ls:LoginService,private curRoute:ActivatedRoute){}

  ngOnInit(){
    this.dataArray=this.service.companyDetail;
    this.openUserForm();
    this.stringData=localStorage.getItem('keyPass')
    if(this.stringData){
      this.data=JSON.parse(this.stringData);
    }
    console.log(this.data);
    // this.isPermission= this.curRoute.snapshot.data['Permissions']
    // console.log(this.isPermission)
    // this.ls.routeData(this.isPermission);
  }

  deleteOpp(data:companyItem){
    this.userDataFlag=false;
    this.deleteId = this.service.companyDetail.findIndex((ele)=>{
      return ele.CompanyId === data.CompanyId && ele.CompanyName === data.CompanyName
      })
      if(this.isUpdate){
        this.isShow=false;
        this.service.deleteFunCompany(this.deleteId);
      }
      else{
        
        this.service.deleteFunCompany(this.deleteId);
      }
  }

  onEditData(val:companyItem){
    this.userDataFlag=false;
    this.id = this.service.companyDetail.findIndex((ele)=>{
    return ele.CompanyId === val.CompanyId && ele.CompanyName === val.CompanyName
    })
    this.EditArray.push(val);
    this.isShow=true;

    if(this.EditArray.length>1){
      this.EditArray.shift();
    }
    this.isUpdate=true;
  }

  formEditData(CompanyId:string,CompanyName:string){
    this.service.editFunCompany(this.id,CompanyId,CompanyName);
    this.isShow=!this.isShow
    this.EditArray=[]
    this.isUpdate=false;
  }

  dataStr='';

  userDataVal(Val:string){
    console.log("data touched",Val);
    if(Val==this.dataStr){
      this.userDataFlag=false;
      this.dataStr='';
    }
    else{
      this.userDataFlag=true;
      this.dataStr=Val;
    }
    this.service.userDetail.filter((item:any)=>{
      if(item.Id==Val){
        this.userData=item;
      }
    })
  }

  openUserForm(){
    return this.service.GetUser().subscribe(res=>{
      console.log("res",res);
    })
  }
}
