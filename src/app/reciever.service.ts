import { Injectable } from '@angular/core';
import { Reciever } from './reciever';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecieverService {

  url="http://localhost:8282/bank/";
  constructor(private http:HttpClient) { 
  }
  getCustomerById(bic:String):Observable<Reciever>
  {
    //console.log("aksksa");
    return this.http.get<Reciever>(this.url+bic.trim())
  }
}
