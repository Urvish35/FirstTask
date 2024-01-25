import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { BranchComponent } from './home/branch/branch.component';
import { CompanyComponent } from './home/company/company.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { SignInComponent } from './form/sign-in/sign-in.component';
import { CanActivate } from './shared/canActivate.guard';
import { CanDeactivate } from './home/homeShared/canDeactive.guard';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'',component:FormComponent},
  {path:'form',component:FormComponent,canActivate:[CanDeactivate]},
  {path:'signIn',component:SignInComponent},
  {path:'home',component:HomeComponent,canActivate:[CanActivate],children:[
    {path:'branch',component:BranchComponent},
    {path:'company',component:CompanyComponent},
    {path:'employee',component:EmployeeComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
