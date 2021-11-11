import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/classes/complaint';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  complaints!: Complaint[];

  constructor(private service:ComplaintService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.service.getComplaints().subscribe(data=>
      this.complaints = data)
  }

}
