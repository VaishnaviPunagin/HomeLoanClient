import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  customerList:Customer[]=[];

  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.customerService.listCustomers().subscribe(data=>{
      this.customerList=data;
      console.log(this.customerList);//to just check and see if data is coming here, can be remved after, this console.log line
    });
  }


  forVerification()
  {

  }

  allApproved(){}

  allRejected(){}


}
