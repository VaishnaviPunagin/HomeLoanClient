import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { DocumentsServiceService } from '../documents-service.service';
import { IncomeDetailsService } from '../income-details.service';
import { LoanDetailsService } from '../loan-details.service';
import { Customer } from '../Models/Customer';
import { DocumentsUpload } from '../Models/DocumentsUpload';
import { IncomeDetail } from '../Models/IncomeDetail';
import { LoanDetail } from '../Models/LoanDetail';

@Component({
  selector: 'app-profile-verification',
  templateUrl: './profile-verification.component.html',
  styleUrls: ['./profile-verification.component.css']
})
export class ProfileVerificationComponent implements OnInit {

  thisCustomer:Customer;
  currentIncome:IncomeDetail;
  currentLoan:LoanDetail;
  userDocs:DocumentsUpload;

  who:number;

  constructor(private active: ActivatedRoute,private customerService:CustomerService, private incomeService:IncomeDetailsService, private loanService:LoanDetailsService, private docsService:DocumentsServiceService) { }

  ngOnInit(): void {

    this.who= this.active.snapshot.params["id"];
    console.log(this.who);
    this.customerService.getById(this.who).subscribe(data=>
      this.thisCustomer=data);

    this.incomeService.displayOneIncomeDetails(this.who).subscribe(data=>
      this.currentIncome=data);
      
    this.docsService.displayOneUsersDocs(this.who).subscribe(data=>
        this.userDocs=data);

    this.loanService.displayOneLoanDetail(this.who).subscribe(data=>
      this.currentLoan=data);
  }

}
