import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  who:number;
  thisCustomer:Customer;

  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {

    let tempStr=sessionStorage.getItem('Who');
    console.log(tempStr);
    if(tempStr)
    {
      this.who=JSON.parse(tempStr) as number;
    }

    this.customerService.getById(this.who).subscribe(data=>
      this.thisCustomer=data);

    console.log(this.thisCustomer.dateOfBirth);
  }

}
