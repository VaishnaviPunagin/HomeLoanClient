import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-list-verification-required',
  templateUrl: './list-verification-required.component.html',
  styleUrls: ['./list-verification-required.component.css']
})
export class ListVerificationRequiredComponent implements OnInit {

  customerList:Customer[]=[];

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllSubmittedForVerification().subscribe(data=>
      this.customerList=data);
  }

}
