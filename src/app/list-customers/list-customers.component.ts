import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customerList:Customer[]=[];

  constructor(private _service: CustomerService) { }

  ngOnInit(): void {
    this._service.listCustomers().subscribe(data=>{
      this.customerList=data;
      console.log(this.customerList);//to just check and see if data is coming here, can be remved after, this console.log line
    });
  }

}
