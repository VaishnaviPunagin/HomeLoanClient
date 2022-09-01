import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url="https://localhost:44374/api/admin"

  constructor(private http:HttpClient) { }

  loginCheck(tempAdmin:any)
  {
    return this.http.post<any>(this.url+`/loginCheck`,tempAdmin);
  }

}
