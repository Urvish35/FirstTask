import { Component, OnInit } from '@angular/core';
import { HomeItem } from '../homeShared/homeItem';
import { HomeDataService } from '../homeShared/home-data.service';

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
  constructor(private service:HomeDataService){}

  ngOnInit(){
    this.dataArray=this.service.companyDetail;
    this.hello=localStorage.getItem('keyPass')
    this.data=JSON.parse(this.hello);
    console.log(this.data);
  }

  deleteOpp(data:HomeItem){
    this.deleteId = this.service.companyDetail.findIndex((ele)=>{
      return ele.CompanyId === data.CompanyId && ele.CompanyName === data.CompanyName
      })
    this.service.deleteFunCompany(this.deleteId);
  }

  onEditData(val:HomeItem){
    this.id = this.service.companyDetail.findIndex((ele)=>{
    return ele.CompanyId === val.CompanyId && ele.CompanyName === val.CompanyName
    })
    this.EditArray.push(val);
    this.isShow=true;
  }

  formEditData(CompanyId:string,CompanyName:string){
    this.service.editFunCompany(this.id,CompanyId,CompanyName);
    this.isShow=!this.isShow
    this.EditArray=[]
  }
}
