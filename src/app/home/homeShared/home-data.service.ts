import { Injectable } from '@angular/core';
import { HomeItem } from './homeItem';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor() { }
  

  // userDetail:HomeItem[]=[
  //   {EmpName: "Urvish", EmpId: "1", CompanyName: "Google", CompanyId: "1", BranchName: "Manager", BranchId: "1"},
  //   {EmpName: "Ronak", EmpId: "2", CompanyName: "Microsoft", CompanyId: "2", BranchName: "Developer", BranchId: "2"},
  //   {EmpName: "Shubham", EmpId: "3", CompanyName: "Oracle", CompanyId: "3", BranchName: "Hr", BranchId: "3"},
  //   {EmpName: "Rushi", EmpId: "4", CompanyName: "TCS", CompanyId: "4", BranchName: "QA tester", BranchId: "4"},
  //   {EmpName: "Jay", EmpId: "5", CompanyName: "Apple", CompanyId: "5", BranchName: "Developer", BranchId: "5"}
  // ]

  branchDetail:any[]=[
    {BranchName: "Manager", BranchId: "1"},
    {BranchName: "Developer", BranchId: "2"},
    {BranchName: "Hr", BranchId: "3"},
    {BranchName: "QA tester", BranchId: "4"},
    {BranchName: "Developer", BranchId: "5"}
  ]

  companyDetail:any[]=[
    {CompanyName: "Google", CompanyId: "1"},
    {CompanyName: "Microsoft", CompanyId: "2"},
    {CompanyName: "Oracle", CompanyId: "3"},
    {CompanyName: "TCS", CompanyId: "4"},
    {CompanyName: "Apple", CompanyId: "5"}
  ]

  employeeDetail:any[]=[
    {EmpName: "Urvish", EmpId: "1"},
    {EmpName: "Ronak", EmpId: "2"},
    {EmpName: "Shubham", EmpId: "3"},
    {EmpName: "Rushi", EmpId: "4"},
    {EmpName: "Jay", EmpId: "5"},
  ]

  deleteFunBranch(val:any){
    this.branchDetail.splice(val,1)
  }

  deleteFunCompany(val:any){
    this.companyDetail.splice(val,1)
  }

  deleteFunEmoloyee(val:any){
    console.log(val);
    
    this.employeeDetail.splice(val,1)
  }
  

  editFunBranch(BranchName:string,BranchId:string,refid:number){
    this.branchDetail.splice(refid,1)
    this.branchDetail.splice(refid,0,{BranchName:BranchName,BranchId:BranchId})
    // this.userDetail[]
  }

  editFunCompany(refid:number,CompanyId:string,CompanyName:string){
    this.companyDetail.splice(refid,1)
    this.companyDetail.splice(refid,0,{CompanyId:CompanyId,CompanyName:CompanyName})
    // this.userDetail[]
  }

  editFunEmoloyee(refid:number,EmpId:string,EmpName:string){
    this.employeeDetail.splice(refid,1)
    this.employeeDetail.splice(refid,0,{EmpId:EmpId,EmpName:EmpName})
    // this.userDetail[]
  }

  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('role');
  }

  getToken(){
    return localStorage.getItem('token')
  }


}
