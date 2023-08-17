import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }


  getAllLogin(): Observable<any> {
    return this.http.get<any>("http://192.168.0.113:8000/login/");
  }

  fetchGeneralData():Observable<any>{
    return this.http.get<any>('http://192.168.0.113:8000/general_view')
 }

 fetchAdminData():Observable<any>{
    return this.http.get<any>('http://192.168.0.113:8000/account_view')
 }
}
