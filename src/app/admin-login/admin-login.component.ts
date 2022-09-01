import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../Models/Admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  formSubmitted=false;

  temp:Admin;

  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
  }

  loginSubmit(form:any)
  {
    this.temp=form.value;
    console.log(this.temp);
    console.log(form.value);
    this.adminService.loginCheck(this.temp).subscribe((res)=>
    {
      console.log(res);
      if(res==null)
      {
        alert("Wrong credentials entered.");
        this.router.navigateByUrl("/adminLogin");
        window.location.reload();
      }
      else
        this.router.navigateByUrl("/adminDashboard");
    });
  }
}

