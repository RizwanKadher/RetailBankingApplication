import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: FormGroup;
  email: string;
  password: string;
  UserType: string;
  error: string = null;
 
  constructor(private authservice : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
   });
  }

  onClickSubmit(data: any) {
    this.UserType = '';
    this.email = data.email;
    this.password = data.password;
    this.authservice.login(this.email,this.password)
    .subscribe(resp =>
      {
        this.UserType =  resp.userType;
        
        localStorage.setItem("isUserLoggedIn","true");
        localStorage.setItem("LoggedInEmailID",data.email);
        localStorage.setItem("privilage",resp.userType);
        this.authservice.isUserLoggedIn.next(true);
      });

        //this.router.navigate(['/account-summary-component']);
        if(this.UserType === "Admin") 
        {
          localStorage.setItem("isAdmin","true");
          //localStorage.setItem("privilage","Admin");
          this.router.navigate(['/usersummary']); 
          //this.router.navigate(['/account-summary-component']);
        }
        else if (this.UserType === "User") {
          localStorage.setItem("isAdmin","false");
          //localStorage.setItem("privilage","User");
          //this.router.navigate(['/customersummary-component']); 
          this.router.navigate(['/accountsummary']); 
        }
  }

}
