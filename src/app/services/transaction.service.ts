import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../model/transaction';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  createTransaction(statement : Transaction): Observable<Transaction[]> {
    console.log(statement);
    return this.http.post<Transaction[]>('http://localhost:3000/transactions',statement)
    .pipe(
      catchError(this.handleError<Transaction[]>('createTransaction', [])));
  }

  getTransactionDetailsByCustomer(emailId : string)
  {
    
  return this.http
    .get<Transaction[]>('http://localhost:3000/transactions?customerEmailId='+emailId+'&_limit=5')
    .pipe(
      catchError(this.handleError<Transaction[]>('getTransactionDetailsByCustomer', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(operation + " failed :"+ error.message);
      return of(result as T);
    };
  }

private log(message: string) {
    console.log(message);
  }
}
