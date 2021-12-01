import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly APIUrl = "http://localhost:47667/api/Email";

  constructor(private _http : HttpClient) { }

  Registerr(empObj : any){
    console.log("empobj.....",empObj);
    //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
    return this._http.post<any>(this.APIUrl + '/Registerr' ,empObj)
  }

  EmailLogin(body:any){
    return this._http.post<any>(this.APIUrl+"/EmailLogin",body)
  }

  SentMessages(empObj : any){
    console.log("empobj.....",empObj);
    return this._http.post<any>(this.APIUrl + '/SentMessages' ,empObj)
  }
}
