import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { FormsModule } from '@angular/forms';
import { DetailedCustomerComponent } from './detailed-customer/detailed-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CreateIncomeDetailsComponent } from './create-income-details/create-income-details.component';
import { IncomeDetailsDisplayComponent } from './income-details-display/income-details-display.component';
import { DocumentsDisplayComponent } from './documents-display/documents-display.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { LoanDetailsDisplayComponent } from './loan-details-display/loan-details-display.component';
import { LoanDetailsCreateComponent } from './loan-details-create/loan-details-create.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileVerificationComponent } from './profile-verification/profile-verification.component';
import { ListVerificationRequiredComponent } from './list-verification-required/list-verification-required.component';
import { ListApprovedLoansComponent } from './list-approved-loans/list-approved-loans.component';
import { ListRejectedLoansComponent } from './list-rejected-loans/list-rejected-loans.component';
//import { ContacUsComponent } from './contac-us/contac-us.component';
//import { ListCustomersComponent } from './list-customers/list-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    ListCustomersComponent,
    DetailedCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    CustomerDashboardComponent,
    CreateIncomeDetailsComponent,
    IncomeDetailsDisplayComponent,
    DocumentsDisplayComponent,
    UploadDocumentsComponent,
    LoanDetailsDisplayComponent,
    LoanDetailsCreateComponent,
    EmiCalculatorComponent,
    EligibilityCalculatorComponent,
    AboutUsComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    ProfileComponent,
    ProfileVerificationComponent,
    ListVerificationRequiredComponent,
    ListApprovedLoansComponent,
    ListRejectedLoansComponent,
 //   ListCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
