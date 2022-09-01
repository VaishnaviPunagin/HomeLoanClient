import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IncomeDetailsService } from '../income-details.service';
import { Customer } from '../Models/Customer';
import { IncomeDetail } from '../Models/IncomeDetail';

@Component({
  selector: 'app-create-income-details',
  templateUrl: './create-income-details.component.html',
  styleUrls: ['./create-income-details.component.css']
})
export class CreateIncomeDetailsComponent implements OnInit {

  newIncomeDetails:IncomeDetail;
  sessionCustomer:Customer;
  currentCustomer:Customer;
  who:number;

  constructor(private _iservice: IncomeDetailsService,private customerService:CustomerService, private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(form:any)
  {
   
    this.newIncomeDetails=form.value;

    let tempStr=sessionStorage.getItem('Who');
    if(tempStr)
    {
      this.who=JSON.parse(tempStr) as number;
    }

    this.customerService.getById(this.who).subscribe(data=>
      {
        this.currentCustomer=data;
        console.log(this.currentCustomer);
        console.log(this.who)
      });
    
    //assigning customerId to newIncomeDetails object from the form
    this.newIncomeDetails.customerId=this.who;

    //updating currentCustomer(which was gotten by ID who)'s incomeDetailsStatus to true.
    //this.currentCustomer.incomeDetailsStatus=true;

   //sessionStorage.setItem('Who',JSON.stringify(this.currentCustomer));
   
    this._iservice.createIncomeDetail(this.newIncomeDetails).subscribe(data=>
      {
        console.log(form);
        console.log(this.newIncomeDetails);
      });
      

    this.router.navigateByUrl("/customerDetails/"+this.who+"/incomeDisplay");
    
  }

}

