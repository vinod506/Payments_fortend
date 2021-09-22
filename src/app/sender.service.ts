import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sender } from './sender';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  url="http://localhost:8282/customer/";
  constructor(private http:HttpClient) { 
  }
  getCustomerById(cust_id:String):Observable<Sender>
  {
    console.log("aksksa");
    return this.http.get<Sender>(this.url+cust_id.trim())
  }
}
