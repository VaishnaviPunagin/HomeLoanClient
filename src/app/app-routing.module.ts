import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateIncomeDetailsComponent } from './create-income-details/create-income-details.component';
import { DetailedCustomerComponent } from './detailed-customer/detailed-customer.component';
import { DocumentsDisplayComponent } from './documents-display/documents-display.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';

import { HomeComponent } from './home/home.component';
import { IncomeDetailsDisplayComponent } from './income-details-display/income-details-display.component';
import { ListApprovedLoansComponent } from './list-approved-loans/list-approved-loans.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { ListRejectedLoansComponent } from './list-rejected-loans/list-rejected-loans.component';
import { ListVerificationRequiredComponent } from './list-verification-required/list-verification-required.component';
import { LoanDetailsCreateComponent } from './loan-details-create/loan-details-create.component';
import { LoanDetailsDisplayComponent } from './loan-details-display/loan-details-display.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileVerificationComponent } from './profile-verification/profile-verification.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';

const routes: Routes = [
  {path:"toHome", component:HomeComponent},
  {path:"toContactUs", component:ContactUsComponent},
  {path:"toAboutUs",component:AboutUsComponent},
  {path:"customerLogin", component:LoginPageComponent},
  {path:"adminLogin", component: AdminLoginComponent},
  {path:"adminDashboard", component: AdminDashboardComponent, children:[
    {path:"allApplicants", component: ListCustomersComponent, children:[
      {path:"profile/:id", component: ProfileVerificationComponent}
    ]},
    {path:"submittedForVerification", component: ListVerificationRequiredComponent, children:[
      {path:"profile/:id", component: ProfileVerificationComponent}
    ]},
    {path:"approvedLoans", component:ListApprovedLoansComponent,children:[
      {path:"profile/:id", component: ProfileVerificationComponent}
    ]},
    {path:"rejectedLoans", component:ListRejectedLoansComponent, children:[
      {path:"profile/:id", component: ProfileVerificationComponent}
    ]}
  ]},
  {path:"createProfile", component:CreateCustomerComponent},
  {path:"toCustomerList", component:ListCustomersComponent},
  {path:"create", component:CreateIncomeDetailsComponent},
  
  {path:"customerDetails/:id", component:DetailedCustomerComponent, children:[
      {path:'', redirectTo: 'profile', pathMatch: 'full'},
      {path:"profile",component:ProfileComponent},
      {path:"incomeCreate", component:CreateIncomeDetailsComponent},
      {path:"incomeDisplay", component:IncomeDetailsDisplayComponent},
      {path:"documentsDisplay", component:DocumentsDisplayComponent},
      {path:"uploadDocuments", component:UploadDocumentsComponent},
      {path:"loanDetailsDisplay", component:LoanDetailsDisplayComponent},
      {path:"loanDetailsCreate", component:LoanDetailsCreateComponent},
      {path:"editProfile/:id", component:EditCustomerComponent}      
      
  ]},
  
  {path:"eligibilityCalc", component:EligibilityCalculatorComponent},
  {path:"EMICalc", component: EmiCalculatorComponent},
 // {path:"editProfile/:id", component:EditCustomerComponent},
  {path: '', redirectTo: '/toHome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
