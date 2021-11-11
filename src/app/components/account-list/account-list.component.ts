import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/classes/signup';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts!:Signup[];
  constructor(private signupService:SignupService ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList()
  {
    this.signupService.getAccounts().subscribe(data =>
      this.accounts=data)
  }

}
