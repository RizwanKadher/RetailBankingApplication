import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-detailedstatement',
  templateUrl: './detailedstatement.component.html',
  styleUrls: ['./detailedstatement.component.css']
})
export class DetailedstatementComponent implements OnInit {

  transactionsDetailsByCustomer= [];
  LoggedInEmailID: string;

  printPDF :[][] =[];

  //head = [['Date', 'Description', 'Transaction Amount', 'Transaction Type', 'Credit / Debit','Transaction Status','Balance As on Date']]

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

  // @ViewChild('content') content: ElementRef;  
  public SavePDF(): void {  
    const doc = new jsPDF()
    autoTable(doc, { html: '#my-table' })
    doc.save('DetailedStatement.pdf')
  }

}
