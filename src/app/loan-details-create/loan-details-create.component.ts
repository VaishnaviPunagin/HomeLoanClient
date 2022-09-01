import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { LoanDetailsService } from '../loan-details.service';
import { Customer } from '../Models/Customer';
import { LoanDetail } from '../Models/LoanDetail';

@Component({
  selector: 'app-loan-details-create',
  templateUrl: './loan-details-create.component.html',
  styleUrls: ['./loan-details-create.component.css']
})
export class LoanDetailsCreateComponent implements OnInit {

  current:LoanDetail;
  currentCustomer:Customer;

  who:number;

  constructor(private loanService:LoanDetailsService, private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:any)
  {
    this.current=form.value;
    let tempStr=sessionStorage.getItem('Who');
    //console.log(tempStr);
    if(tempStr)
    {
      this.who=JSON.parse(tempStr) as number
    }

    this.current.customerId=this.who;
   this.loanService.createLoanDetail(this.current).subscribe(data=>
    {
      console.log(form);
      console.log(this.current);
    });

  }

}
