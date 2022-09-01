import { Component, OnInit } from '@angular/core';
import { LoanDetailsService } from '../loan-details.service';
import { LoanDetail } from '../Models/LoanDetail';

@Component({
  selector: 'app-loan-details-display',
  templateUrl: './loan-details-display.component.html',
  styleUrls: ['./loan-details-display.component.css']
})
export class LoanDetailsDisplayComponent implements OnInit {

  who:number;
  currentLoan:LoanDetail;

  constructor(private loanService:LoanDetailsService) { }

  ngOnInit(): void {
    let tempStr=sessionStorage.getItem('Who');
 
    if(tempStr)
    {
      this.who=JSON.parse(tempStr) as number;
    }
    this.loanService.displayOneLoanDetail(this.who).subscribe(data=>
      this.currentLoan=data);
  }

}
