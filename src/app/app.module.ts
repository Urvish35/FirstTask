import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './home/employee/employee.component';
import { CompanyComponent } from './home/company/company.component';
import { BranchComponent } from './home/branch/branch.component';
import { SignInComponent } from './form/sign-in/sign-in.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FavouriteComponent } from './home/favourite/favourite.component';
import { UserDataComponent } from './home/user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    EmployeeComponent,
    CompanyComponent,
    BranchComponent,
    SignInComponent,
    ErrorPageComponent,
    FavouriteComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
