export interface Customer
{
    customerId: number;
    firstName: string;
    middleName:string;
    lastName: string;
    emailId: string;
    password: string;
    phoneNumber: string;
    dateOfBirth: Date;
    age : number;
    gender: string;
    nationality: string;
    aadharNumber : string;
    panNumber: string;
    customerAccountStatus: boolean;
    incomeDetailsStatus: boolean;
    documentUploadStatus: boolean;
    loanDetailsStatus: boolean;
    applicationStatus: string;
}