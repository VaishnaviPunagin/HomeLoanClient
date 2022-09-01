import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-list-approved-loans',
  templateUrl: './list-approved-loans.component.html',
  styleUrls: ['./list-approved-loans.component.css']
})
export class ListApprovedLoansComponent implements OnInit {

customerList:Customer[]=[];

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllApprovedLoans().subscribe(data=>
      this.customerList=data);
  }

}
