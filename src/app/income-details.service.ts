import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncomeDetail } from './Models/IncomeDetail';

@Injectable({
  providedIn: 'root'
})
export class IncomeDetailsService {

  url:string="https://localhost:44374/api/incomedetail";

  constructor(private http:HttpClient) { }

  listAllIncomeDetails():Observable<any>
  {
    return this.http.get<any>(this.url);
  }

  createIncomeDetail(newIncomeDetails:IncomeDetail):Observable<IncomeDetail>
  {
    return this.http.post<IncomeDetail>(this.url,newIncomeDetails);
  }

  displayOneIncomeDetails(id: number):Observable<any>
  {
    //this.url=`${this.url}/{$id}`;
    //return this.http.get<category>(`${this.url}/${id}`);
    return this.http.get<any>(this.url+'/'+id);
  }


}
