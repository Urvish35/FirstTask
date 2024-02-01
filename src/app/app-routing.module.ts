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
import { CanPermission } from './shared/Permission.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { canResolve } from './home/homeShared/canresolve.guard';
//import { PreventBackButtonGuard } from './home/homeShared/prevent-back-button.guard';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:'form',component:FormComponent,canActivate:[CanActivate]},
  {path:'signIn',component:SignInComponent,canActivate:[CanActivate]},
  {path:'form/signIn',redirectTo:'signIn',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[CanDeactivate],children:[
    {path:'branch',component:BranchComponent,data:{Permissions:['superAdmin']},canActivate:[CanPermission],resolve:{val:canResolve}},
    {path:'company',component:CompanyComponent,data:{Permissions:['superAdmin','Admin']},canActivate:[CanPermission]},
    {path:'employee',component:EmployeeComponent,data:{Permissions:['superAdmin','Admin','baseUser']},canActivate:[CanPermission]},
  ]},
  {path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
