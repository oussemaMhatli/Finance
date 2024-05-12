import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { transaction } from '../user-management/components/modeles/Transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {

  private apiurl="http://localhost:3000/transactions/"
  constructor(private http:HttpClient) { }


  getall()
  {
    return this.http.get(this.apiurl+"all");
  }


  gettransactionparid(id:string):Observable<transaction>{
    return this.http.get<transaction>(`${this.apiurl}trans/`+id)
  }


  addTransaction(transaction: transaction): Observable<transaction> {
    return this.http.post<transaction>(`${this.apiurl}create`, transaction);
  }


}