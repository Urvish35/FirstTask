import { Injectable } from '@angular/core';
import { BranchItem, EmpItem, HomeItem, allInfo, companyItem } from './homeItem';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  // favVal:any
  userArr:allInfo[]=[]

  constructor(private _http:HttpClient) { }

  userDetail:allInfo[]=[
    {Id: "1",EmpName: "Urvish",  CompanyName: "Google",  BranchName: "Manager"},
    {Id: "2",EmpName: "Ronak",  CompanyName: "Microsoft",  BranchName: "Developer"},
    {Id: "3",EmpName: "Shubham",  CompanyName: "Oracle",  BranchName: "Hr"},
    {Id: "4",EmpName: "Rushi",  CompanyName: "TCS",  BranchName: "QA tester"},
    {Id: "5",EmpName: "Jay",  CompanyName: "Apple",  BranchName: "Developer"}
  ]

  branchDetail:BranchItem[]=[
    {BranchName: "Manager", BranchId: "1"},
    {BranchName: "Developer", BranchId: "2"},
    {BranchName: "Hr", BranchId: "3"},
    {BranchName: "QA tester", BranchId: "4"},
    {BranchName: "Developer", BranchId: "5"}
  ]

  companyDetail:companyItem[]=[
    {CompanyName: "Google", CompanyId: "1"},
    {CompanyName: "Microsoft", CompanyId: "2"},
    {CompanyName: "Oracle", CompanyId: "3"},
    {CompanyName: "TCS", CompanyId: "4"},
    {CompanyName: "Apple", CompanyId: "5"}
  ]

  employeeDetail:EmpItem[]=[
    {EmpName: "Urvish", EmpId: "1"},
    {EmpName: "Ronak", EmpId: "2"},
    {EmpName: "Shubham", EmpId: "3"},
    {EmpName: "Rushi", EmpId: "4"},
    {EmpName: "Jay", EmpId: "5"},
  ]

  deleteFunBranch(val:number){
    this.branchDetail.splice(val,1)
  }

  deleteFunCompany(val:number){
    this.companyDetail.splice(val,1)
  }

  deleteFunEmoloyee(val:number){
    // console.log(val);
    
    this.employeeDetail.splice(val,1)
  }
  

  editFunBranch(BranchName:string,BranchId:string,refid:number){
    this.branchDetail.splice(refid,1)
    this.branchDetail.splice(refid,0,{BranchName:BranchName,BranchId:BranchId})
    // this.userDetail[]
    console.log("branch",this.branchDetail);
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

  getData(){
    return new Observable((sub)=>{
      setTimeout(()=>{
        sub.next(this.branchDetail);
      },500)
    })
  }

  // favouriteData=new BehaviorSubject<BranchItem>({BranchName: "Manager", BranchId: "1"})
  
  favouriteAllData=new BehaviorSubject<allInfo>({Id: "",EmpName:"", CompanyName:"", BranchName: ""})
  

  // recieveData(val:BranchItem){
  //   this.favouriteAllData.next(val);
  //   console.log(val);
  // }

  recieveAllData(val:allInfo){
    this.favouriteAllData.next(val)
    console.log(val);
  }

  // reciveVal(val:allInfo){
  //   debugger
  //   // if(!this.userArr.includes(val)){
      
  //   //   console.log("hello",this.userArr);
      
  //   // }
  //   this.userArr.push(val);
  // }


  filterSub = new Subject<string>()

  addUser(data:any){
    return this._http.post('http://localhost:3000/userDetails',data);
  }

  



}
