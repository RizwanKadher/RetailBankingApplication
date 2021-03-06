export interface Transaction {
    fromAccountNumber : number,
    toAccountNumber : number,
    transactionType : string,
    transactionAmount : number,
    transactionDate : Date,
    transactionStatus : string
    balanceAsOnDate : number,
    transactionRemarks : string,
    transactionid : number,
    customerEmailId : string,
    creditorDebit : string
}
