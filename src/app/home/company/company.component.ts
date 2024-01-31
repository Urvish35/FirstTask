import { Component, OnInit } from '@angular/core';
import { HomeItem } from '../homeShared/homeItem';
import { HomeDataService } from '../homeShared/home-data.service';
import { LoginService } from 'src/app/shared/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  dataArray:HomeItem[]=[]
  EditArray:HomeItem[]=[]
  data:any;
  hello:any;
  id:number=0;
  deleteId:number=0;
  isShow:boolean=true;
  isUpdate:boolean=false;
  // isPermission:any;
  constructor(private service:HomeDataService,private ls:LoginService,private curRoute:ActivatedRoute){}

  ngOnInit(){
    this.dataArray=this.service.companyDetail;
    this.hello=localStorage.getItem('keyPass')
    this.data=JSON.parse(this.hello);
    console.log(this.data);
    // this.isPermission= this.curRoute.snapshot.data['Permissions']
    // console.log(this.isPermission)
    // this.ls.routeData(this.isPermission);
  }

  deleteOpp(data:HomeItem){
    this.deleteId = this.service.companyDetail.findIndex((ele)=>{
      return ele.CompanyId === data.CompanyId && ele.CompanyName === data.CompanyName
      })
      if(!this.isUpdate){
        // this.isShow=false;
        this.service.deleteFunCompany(this.deleteId);
      }
  }

  onEditData(val:HomeItem){
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
}
