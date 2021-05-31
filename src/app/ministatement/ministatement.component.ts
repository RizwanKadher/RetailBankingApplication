import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent implements OnInit {

  LoggedInEmailID: string;
  transactionsDetailsByCustomer : any[];
  constructor(private statementservice : TransactionService) { }

  ngOnInit(): void {
    this.readAllTransactionsByCustomer();
  }

  readAllTransactionsByCustomer()
  {
    this.transactionsDetailsByCustomer=[];
    this.LoggedInEmailID = localStorage.getItem("LoggedInEmailID").toString();
    this.statementservice.getTransactionDetailsByCustomer(this.LoggedInEmailID )
    .subscribe((resp:any) => {
      (error: any) => console.log(error);
        for (const data of resp) {
            this.transactionsDetailsByCustomer.push(data);
        }
      console.log(this.transactionsDetailsByCustomer);
    });
  }

}
