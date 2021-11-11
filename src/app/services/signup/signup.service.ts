import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from 'src/app/classes/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl="http://localhost:8081/getAllAccount"
  constructor(private httpClient:HttpClient) { }

  public saveAccount(signup:Signup) : Observable<Object>
  {
    return this.httpClient.post(`http://localhost:8081/signUp`,signup)
  }

  public getAccounts() : Observable<Signup[]>
  {
    return this.httpClient.get<Signup[]>(`${this.baseUrl}`);
  }

}
