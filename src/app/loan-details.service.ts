import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanDetail } from './Models/LoanDetail';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailsService {

  url:string="https://localhost:44374/api/loanDetails"

  constructor(private http:HttpClient) { }

  listAllLoanDetails():Observable<any>
  {
    return this.http.get<any>(this.url);
  }

  createLoanDetail(newLoan:LoanDetail):Observable<LoanDetail>
  {
    return this.http.post<LoanDetail>(this.url,newLoan);
  }

  displayOneLoanDetail(id: number):Observable<any>
  {
    //this.url=`${this.url}/{$id}`;
    //return this.http.get<category>(`${this.url}/${id}`);
    return this.http.get<any>(this.url+'/'+id);
  }



}
