import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/classes/complaint';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-complaint-entry',
  templateUrl: './complaint-entry.component.html',
  styleUrls: ['./complaint-entry.component.css']
})
export class ComplaintEntryComponent implements OnInit {

  complaintNew: Complaint=new Complaint();
  constructor(private service:ComplaintService,private router:Router) { }

  saveComplaint(){
    this.service.saveComplaint(this.complaintNew).subscribe(data =>{
      console.log(data);
      this.goToComplaintList();
    },
    error =>console.log(error)
    );
  }

  goToComplaintList()
  {
    this.router.navigate(['/dash']);
  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    // console.log(this.complaintNew);
    this.saveComplaint();
  }
}
