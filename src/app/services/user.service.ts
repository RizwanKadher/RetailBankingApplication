
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getCustomerDetails() : Observable<User[]> {
    return this.http
    .get<User[]>('http://localhost:3000/userdetails')
    .pipe(
      catchError(this.handleError<User[]>('getCustomerDetails', [])));
  }

  getcustomerDetails(emailId : string)
  {
  return this.http
    .get<User[]>('http://localhost:3000/userdetails?customerEmailId='+emailId)
    .pipe(
      catchError(this.handleError<User[]>('getCustomerDetails', [])));
  }
  
  UpdateCustomerAccountDetails(id:any, value:User)
  {
    return this.http
    .put<User[]>('http://localhost:3000/userdetails/'+id, value)
    .pipe(
     catchError(this.handleError<User[]>('UpdateCcustomerAccountDetails', [])))
  }
  
  //Store Customers method (Using PUT / POST method)
  create(customer : User): Observable<User[]> {
      console.log(customer);
      return this.http.post<User[]>('http://localhost:3000/userdetails',customer)
      .pipe(
        catchError(this.handleError<User[]>('create', [])));

      
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
