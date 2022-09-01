import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  newCustomer:Customer;
  formSubmitted=false;
  


  constructor(private _service: CustomerService,private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(body:any)
  {
    try{this.newCustomer=body.value;
      this._service.createCustomer(this.newCustomer).subscribe(data=>
          {
            console.log(body);
            console.log(this.newCustomer);
          });
      this.router.navigateByUrl('/customerLogin');}
      catch{
        alert("Account could not be created, try again.")
      }
  }
}
