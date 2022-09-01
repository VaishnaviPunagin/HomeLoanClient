import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  thisCustomer:Customer;

  constructor(private _service: CustomerService,private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
    const tid=this.active.snapshot.params["id"];
    let id=Number(tid);
    console.log("id= "+id);
    this._service.editCustomer(id).subscribe(data=>
      {
        this.thisCustomer=data;
        console.log(id);
      })
  }

  onEditSubmit(thisCustomer:any){
    this._service.updateCustomer(this.thisCustomer).subscribe(data=>
      console.log(thisCustomer)
   );
   //this.id=this.thisCustomer.customerId;
   this.router.navigateByUrl(`customerDetails/${this.thisCustomer.customerId}`);
  }

}
