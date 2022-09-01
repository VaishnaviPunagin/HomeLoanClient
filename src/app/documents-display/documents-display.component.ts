import { Component, OnInit } from '@angular/core';
import { DocumentsServiceService } from '../documents-service.service';
import { DocumentsUpload } from '../Models/DocumentsUpload';

@Component({
  selector: 'app-documents-display',
  templateUrl: './documents-display.component.html',
  styleUrls: ['./documents-display.component.css']
})
export class DocumentsDisplayComponent implements OnInit {

  userDocs:DocumentsUpload;
  who:number;

  constructor(private docsService:DocumentsServiceService) { }

  ngOnInit(): void {
    let tempStr=sessionStorage.getItem('Who');
    if(tempStr)
    {
      this.who=JSON.parse(tempStr) as number;
    }

    this.docsService.displayOneUsersDocs(this.who).subscribe(data=>
      this.userDocs=data);

  }

}
