export interface User {
    customerName : string,
    customerId : number,
    customerAccounts:UserAccount[],
    customerAddress : string,
    customerstatus : string
    customerPhone : string,
    customerEmailId : string,
    Gender : string,
    password : string,
    userType : string
}

export interface UserAccount{
    accountnumber : number,
    accounttype: string,
    balance : number,
    accountstatus : string,
}
