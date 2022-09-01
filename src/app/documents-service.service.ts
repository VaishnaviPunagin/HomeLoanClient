import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentsUpload } from './Models/DocumentsUpload';

@Injectable({
  providedIn: 'root'
})
export class DocumentsServiceService {

  url="https://localhost:44374/api/documentupload";

  constructor(private http:HttpClient) { }

  listAllDocumentsUploadedDetails()
  {
    return this.http.get<any>(this.url);
  }

  createDocumentsUploadDetails(newDocs: DocumentsUpload)
  {
    return this.http.post<DocumentsUpload>(this.url,newDocs);
  }

  displayOneUsersDocs(id: number):Observable<any>
  {
    //this.url=`${this.url}/{$id}`;
    //return this.http.get<category>(`${this.url}/${id}`);
    return this.http.get<any>(this.url+'/'+id);
  }
}
