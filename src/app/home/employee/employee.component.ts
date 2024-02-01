import { Component, OnInit } from '@angular/core';
import { HomeItem } from '../homeShared/homeItem';
import { HomeDataService } from '../homeShared/home-data.service';
import { LoginService } from 'src/app/shared/login.service';
import { ActivatedRoute } from '@angular/router';

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
  isUpdate:boolean=false;
  // isPermission:any;
  constructor(private service:HomeDataService,private ls:LoginService,private curRoute:ActivatedRoute){
    // ls.routeData();
  }

  ngOnInit(){
    this.dataArray=this.service.employeeDetail;
    this.hello=localStorage.getItem('keyPass')
    this.data=JSON.parse(this.hello);
    console.log(this.data);
    // this.isPermission= this.curRoute.snapshot.data['Permissions']
    // console.log(this.isPermission)
    // this.ls.routeData(this.isPermission);
  }

  deleteOpp(data:HomeItem){
    this.deleteId=this.dataArray.findIndex(ele=>{
      return ele.EmpId === data.EmpId && ele.EmpName === data.EmpName
    })
    if(this.isUpdate){
      this.isShow=false;
      this.service.deleteFunEmoloyee(this.deleteId);
    }
    else{
        
      this.service.deleteFunBranch(this.deleteId);
    }
  }

  onEditData(val:HomeItem){
    this.id = this.service.employeeDetail.findIndex((ele)=>{
    return ele.EmpId === val.EmpId && ele.EmpName === val.EmpName
    })
    this.EditArray.push(val);
    this.isShow=true;

    if(this.EditArray.length>1){
      this.EditArray.shift();
    }

    this.isUpdate=true;
  }

  formEditData(EmpId:string,EmpName:string){
    this.service.editFunEmoloyee(this.id,EmpId,EmpName);
    this.isShow=!this.isShow
    this.EditArray=[]
    this.isUpdate=false;
  }
}
