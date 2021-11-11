import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/classes/signup';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupAccount: Signup=new Signup();
  constructor(private signupService:SignupService,private router:Router) { }

  saveAccount()
  {
    this.signupService.saveAccount(this.signupAccount).subscribe(data =>{
      console.log(data);
      this.goToAccountList();
    },
    error => console.log(error));
  }

  goToAccountList()
  {
    this.router.navigate(['/signup'])
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.saveAccount();
  }

}
