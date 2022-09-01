import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  result!:number;
  roi=8.5;
  ro=0;

  constructor() { }

  CalculateEmi(val1:string,val2:string)
  {
    this.ro=this.roi/100;
    this.result=(parseInt(val1)*this.ro*(((1+this.ro)**parseInt(val2))/((1+this.ro)**(parseInt(val2)-1))));


 }

  ngOnInit(): void {
  }

}
