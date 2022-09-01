import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IncomeDetailsService } from '../income-details.service';
import { Customer } from '../Models/Customer';
import { IncomeDetail } from '../Models/IncomeDetail';

@Component({
  selector: 'app-income-details-display',
  templateUrl: './income-details-display.component.html',
  styleUrls: ['./income-details-display.component.css']
})
export class IncomeDetailsDisplayComponent implements OnInit {
  
  currentIncome:IncomeDetail;


  who:number;


  constructor(private _iservice:IncomeDetailsService, private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
    let tempStr=sessionStorage.getItem('Who');
 
    if(tempStr)
    {
      this.who=JSON.parse(tempStr) as number;
    }
    this._iservice.displayOneIncomeDetails(this.who).subscribe(data=>
      {
        this.currentIncome=data;

      });
      
  }

}
