import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DocumentsServiceService } from '../documents-service.service';
import { FileUploadService } from '../file-upload.service';
import { Customer } from '../Models/Customer';
import { DocumentsUpload } from '../Models/DocumentsUpload';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit {

  file!:File;
  loading: boolean = false; 
  shortLink:string;

  aadhar:string;
  pan:string;
  salaryS:string;
  noc:string;
  sale:string;
  
  who:number;
  userDocs:DocumentsUpload;
  currentCustomer:Customer;

  constructor(private fileUploadService: FileUploadService, private docsService:DocumentsServiceService, private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  onChange(event:any) 
  {
    this.file = event.target.files[0];
  }

  onUploadPan()
  {
  this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;
                this.loading = false; // Flag variable  
                this.pan=this.shortLink
                //console.log(this.userDocs.aadharLink)
            }
        }
    );
  }

  onUploadAadhar()
  {
  this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;
                this.loading = false; // Flag variable  
                this.aadhar=this.shortLink
                //console.log(this.userDocs.aadharLink)
            }
        }
    );
  }

  onUploadSalarySlip()
  {
  this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;
                this.loading = false; // Flag variable  
                this.salaryS=this.shortLink
                //console.log(this.userDocs.aadharLink)
            }
        }
    );
  }

  onUploadNOC()
  {
  this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;
                this.loading = false; // Flag variable  
                this.noc=this.shortLink
                //console.log(this.userDocs.aadharLink)
            }
        }
    );
  }

  onUploadSale()
  {
  this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;
                this.loading = false; // Flag variable  
                this.sale=this.shortLink
                //console.log(this.userDocs.aadharLink)
            }
        }
    );
  }

  onSubmit(form:any)
  {
    form.value.panCard=this.pan;
    form.value.aadharCard=this.aadhar;
    form.value.salarySlip=this.salaryS;
    form.value.nocFromBuilder=this.noc;
    form.value.agreementToSale=this.sale;

    //assign form value to new DOcument row for DB
    this.userDocs=form.value;

    let tempStr=sessionStorage.getItem('Who');
    if(tempStr)
    {
      this.who=JSON.parse(tempStr) as number;
    }
    
    this.userDocs.customerId=this.who;

    this.docsService.createDocumentsUploadDetails(this.userDocs).subscribe(data=>
      {
        console.log(form);
        console.log(this.userDocs);
      });
  }

}
