import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Message } from './Message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url="http://localhost:8282/message";
  constructor(private http:HttpClient) { }
  getMes():Observable<Message[]>
  {
    return this.http.get<Message[]>(this.url)
  }
}
