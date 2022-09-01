import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-list-rejected-loans',
  templateUrl: './list-rejected-loans.component.html',
  styleUrls: ['./list-rejected-loans.component.css']
})
export class ListRejectedLoansComponent implements OnInit {

  customerList:Customer[]=[];

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllRejectedLoans().subscribe(data=>
      this.customerList=data);
  }
}
