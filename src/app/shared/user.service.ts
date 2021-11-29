import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly APIUrl = "http://localhost:47667/api/Travel/EmailRegistration";

  constructor(private _http : HttpClient) { }

  Register(empObj : any){
    console.log("empobj.....",empObj);
    //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
    return this._http.post<any>(this.APIUrl ,empObj)
  }
}
