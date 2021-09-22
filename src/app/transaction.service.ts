import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url="http://localhost:8282/transaction/";
  constructor(private http:HttpClient) { 
  }
  postaddtransaction(transaction:Transaction):Observable<Transaction>
  {
    return this.http.post<Transaction>(this.url,transaction);
  }
}
