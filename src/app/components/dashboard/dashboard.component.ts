import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/classes/complaint';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  complaints!: Complaint[];

  constructor() { }

  ngOnInit(): void {
  }

}
