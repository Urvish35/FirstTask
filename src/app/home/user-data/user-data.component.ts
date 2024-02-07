import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchItem, EmpItem, allInfo, companyItem } from '../homeShared/homeItem';
import { HomeDataService } from '../homeShared/home-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  @ViewChild('userData') signupForm?: NgForm

  branchObj: BranchItem = { BranchName: "", BranchId: "" }
  companyObj: companyItem = { CompanyName: "", CompanyId: "" }
  EmpObj: EmpItem = { EmpName: "", EmpId: "" }


  constructor(private service: HomeDataService, private router: Router) { }

  resetFun(val: allInfo) {
    this.signupForm?.reset()
  }

  addData(val: allInfo) {
    if (this.signupForm?.valid) {
      this.branchObj.BranchName = val.BranchName
      this.branchObj.BranchId = val.Id
      this.companyObj.CompanyName = val.CompanyName
      this.companyObj.CompanyId = val.Id
      this.EmpObj.EmpName = val.EmpName
      this.EmpObj.EmpId = val.Id

      this.service.userDetail.push(val);
      this.service.branchDetail.push(this.branchObj);
      this.service.companyDetail.push(this.companyObj);
      this.service.employeeDetail.push(this.EmpObj);
      this.signupForm?.reset()
      this.router.navigate(['/home'])
    }
    else {
      alert("please Enter All Valid Information")
    }
  }
}
