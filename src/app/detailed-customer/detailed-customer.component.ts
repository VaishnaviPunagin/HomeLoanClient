import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-detailed-customer',
  templateUrl: './detailed-customer.component.html',
  styleUrls: ['./detailed-customer.component.css']
})
export class DetailedCustomerComponent implements OnInit {

  thisCustomer:Customer;
  who:number;
  
  constructor(private _service: CustomerService,private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
   
    let tempStr=sessionStorage.getItem('Who');
    console.log(tempStr);
    if(tempStr)
    {
      this.who=JSON.parse(tempStr) as number;
    }
    
    console.log(this.who);
    this._service.getById(this.who).subscribe(data=>
    {
      this.thisCustomer=data;
      console.log(this.thisCustomer);
    });

  }

  onIncomeButton()
    {
      //this.router.navigate(['o'],{relativeTo:this.active});
      //this.router.navigateByUrl("o");
    if(this.thisCustomer.incomeDetailsStatus==true)
    {
       console.log("is true, income details exit");
       this.router.navigate(['incomeDisplay'],{relativeTo:this.active});
    }
    else
    {
       console.log("Make income details fomr shiz");
       this.router.navigate(['incomeCreate'],{relativeTo:this.active});
     }
    // console.log("meow");
    }

  onDocumentsButton()
  {
    if(this.thisCustomer.documentUploadStatus==true)
    {
      this.router.navigateByUrl("/customerDetails/"+this.thisCustomer.customerId+"/documentsDisplay");
    }
    else
    {
      this.router.navigateByUrl("/customerDetails/"+this.thisCustomer.customerId+"/uploadDocuments");
    }
    
  }

  onLoanButton()
  {
    if(this.thisCustomer.loanDetailsStatus==true)
      this.router.navigateByUrl("/customerDetails/"+this.thisCustomer.customerId+"/loanDetailsDisplay");
    else
      this.router.navigateByUrl("/customerDetails/"+this.thisCustomer.customerId+"/loanDetailsCreate");
  }
    
  onProfileButton(){
    this.router.navigateByUrl("/customerDetails/"+this.thisCustomer.customerId+"/profile")
  }

}
