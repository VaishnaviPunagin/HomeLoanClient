import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  temp:Customer;
 // Who:string;
 formSubmitted=false;

  constructor(private _service: CustomerService,private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
  }

  loginSubmit(body:any)
  {
    this.temp=body.value;
    console.log(this.temp);
    this._service.loginCheck(this.temp).subscribe((res)=>
      {
        console.log(res);
        if(res==null)
        {
          console.log("no");
          alert("Either of the fields or both are incorrect");
          this.router.navigateByUrl("/toLoginPage");
          window.location.reload();
        }
        else
        {
          console.log("yes");
          sessionStorage.setItem('Who',JSON.stringify(res.customerId));
          console.log(sessionStorage.getItem('Who'));
          this.router.navigateByUrl("/customerDetails/"+res.customerId);
        }
        
        
      });
  }
}
