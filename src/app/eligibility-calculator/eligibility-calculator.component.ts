import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {

  result!:number;


  constructor() { }
  
  Calculate(val1:string)
  {
    this.result= 60 * (0.6 * parseInt(val1)) / 100  
  }

  ngOnInit(): void {

  }

}
