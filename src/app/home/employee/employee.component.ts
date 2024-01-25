import { Component, OnInit } from '@angular/core';
import { HomeItem } from '../homeShared/homeItem';
import { HomeDataService } from '../homeShared/home-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  dataArray:HomeItem[]=[]
  EditArray:HomeItem[]=[]
  data:any;
  hello:any;
  id:number=0;
  deleteId:number=0;
  isShow:boolean=true;
  constructor(private service:HomeDataService){}

  ngOnInit(){
    this.dataArray=this.service.employeeDetail;
    this.hello=localStorage.getItem('keyPass')
    this.data=JSON.parse(this.hello);
    console.log(this.data);
  }

  deleteOpp(data:HomeItem){
    this.deleteId=this.dataArray.findIndex(ele=>{
      return ele.EmpId === data.EmpId && ele.EmpName === data.EmpName
    })
    this.service.deleteFunEmoloyee(this.deleteId);
  }

  onEditData(val:HomeItem){
    this.id = this.service.employeeDetail.findIndex((ele)=>{
    return ele.EmpId === val.EmpId && ele.EmpName === val.EmpName
    })
    this.EditArray.push(val);
    this.isShow=true;
  }

  formEditData(EmpId:string,EmpName:string){
    this.service.editFunEmoloyee(this.id,EmpId,EmpName);
    this.isShow=!this.isShow
    this.EditArray=[]
  }
}
