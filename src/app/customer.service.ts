import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Customer } from './Models/Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string="https://localhost:44374/api/customer";

  constructor(private http:HttpClient) { }

  listCustomers():Observable<any>
  {
    return this.http.get<any>(this.url);
  }

  getById(id: number):Observable<any>
  {
    //this.url=`${this.url}/{$id}`;
    //return this.http.get<category>(`${this.url}/${id}`);
    return this.http.get<any>(this.url+'/'+id);
  }

  editCustomer(id: number):Observable<any>
  {
    return this.http.get<any>(this.url+'/'+id);
  }

  updateCustomer(editedCustomer:any)
  {
    return this.http.put<Customer>(this.url+"/"+ editedCustomer.customerId,editedCustomer);
  }

  createCustomer(newCustomer:Customer):Observable<Customer>
  {
    return this.http.post<Customer>(this.url,newCustomer);
  }

  loginCheck(tempCustomer:any)
  {
    return this.http.post<Customer>(this.url+"/loginCheck",tempCustomer);
  }


  // updateIncomeStatus(incomeUpdate:any)
  // {
  //   return this.http.put<any>(this.url+"/incomeUpdate/"+incomeUpdate.id, incomeUpdate);
  // }

  getAllSubmittedForVerification()
  {
    return this.http.get<any>(this.url+"/submittedForVerification");
  } 

  handleError(error:HttpErrorResponse){
      let errorMessage="";
      errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
      alert(errorMessage);
      return throwError(errorMessage);
    }
    


}
