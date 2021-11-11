import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../classes/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private baseUrl="http://localhost:8080/getAll";
  constructor(private httpClient:HttpClient) { }

  public getComplaints() :Observable<Complaint[]>
  {
    return this.httpClient.get<Complaint[]>(`${this.baseUrl}`);
  }
}
